#!/bin/bash
set -e

pushd `dirname $0` > /dev/null
SCRIPT_PATH=`pwd -P`
popd > /dev/null
SCRIPT_FILE=`basename $0`

COLOR_INFO='\033[0;36m'
COLOR_NONE='\033[0m'

source ${SCRIPT_PATH}/query_problem.sh

function usage()
{

    echo -e "Usage: ${0} [url]"
    echo -e ""
    echo -e "Example:"
    echo -e ""
    echo -e "   Running workflow for a problem"
    echo -e "   ${0} https://leetcode.com/problems/largest-number/"
    echo -e ""
}

function git_commit(){
    TITLE=$1
    FILE1=$2
    FILE2=$3
    git commit -m "problem: new problem solution - ${TITLE}"
}

if [ $# -lt 1 ] || [[ "${1}" != ${LEETCODE_NEW_URL}* ]] && [[ "${1}" != ${LEETCODE_OLD_URL}* ]]; then
    usage
    exit 255
fi

if [[ "${1}" == ${LEETCODE_OLD_URL}* ]]; then
    LEETCODE_URL=${LEETCODE_OLD_URL}
fi

platform=`detect_os`
leetcode_url=$1

get_question_slug ${leetcode_url}
dir_name=`echo ${QUESTION_TITLE_SLUG} | awk -F '-' '{for (i=1; i<=NF; i++) printf("%s", toupper(substr($i,1,1)) substr($i,2)) }'`
dir_name=`echo ${dir_name:0:1} | tr '[A-Z]' '[a-z]'`${dir_name:1}

dir_name="problems/algorithms/${dir_name}"

mkdir -p ${dir_name}
echo "Step 1 : Created \"${dir_name}\" directory!"
cd ${dir_name}

file=`${SCRIPT_PATH}/comments.sh ${leetcode_url} | grep updated | awk '{print $1}'`
WORKING_DIR=`pwd`
SRC="${dir_name}/${file}"
SRC_FILE="${WORKING_DIR}/${file}"
README_FILE="${SCRIPT_PATH}/../README.md"

echo "Step 2 : Created \"${SRC}\" source file!"

vi "${SRC_FILE}"
echo "${file} ${SRC} ${SRC_FILE}"
echo "Step 3 : Edited the \"${SRC}\"!"

git add ${SRC_FILE}
echo "Step 4 : Run \"git add ${SRC}\"!"

readme=`${SCRIPT_PATH}/readme.sh ${SRC_FILE}`
readme=`echo "${readme}" | tail -n 1`

if [[ "$platform" == "macos" ]]; then
    echo $readme | pbcopy
else
    echo $readme
    read -n 1 -s -r -p  "Please copy the line above & press any key continue to edit README.md"
fi
echo "Step 5 : Copied the readme text to Clipboard!"

vi ${README_FILE}
echo "Step 6 : Edited the \"README.md\"!"

git add ${README_FILE}
echo "Step 7 : Run \"git add ${README_FILE}\"!"

QUESTION_FRONTEND_ID=`echo "${readme}" | awk -F '|' '{print $2}'`
QUESTION_DIFFICULTY=`echo "${readme}" | awk -F '|' '{print $5}'`
QUESTION_TITLE=`echo "${readme}" | awk -F '|' '{print $3}' | sed 's/\[/\]/' |awk -F ']' '{print $2}'`
commit="git commit -m \"New Problem Solution - \\\"${QUESTION_FRONTEND_ID}. ${QUESTION_TITLE}\\\"\""

yarn lint:fix
yarn prettier:fix

git add ${SRC_FILE}
git add ${README_FILE}

echo "Step 8 : It's ready to commit to git repository ..."
echo ""
echo "      ${commit} \\"
echo "          ${SRC_FILE} \\"
echo "          ${README_FILE}"
echo ""

git status

commit="${commit} \"${WORKING_DIR}/${file}\" \"${SCRIPT_PATH}/../README.md\""

echo ""
echo "      Commit Message:"
echo "      problem: new problem solution - ${QUESTION_FRONTEND_ID}. ${QUESTION_TITLE}"
echo ""

while true; do
    read -p "Do you wish to commit them (y/n) ? " yn
    case $yn in
        [Yy]* ) git_commit "${QUESTION_FRONTEND_ID}. ${QUESTION_TITLE}" "${SRC_FILE}" "${README_FILE}" ; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done

echo "Step 9 : Commit to git repository!"

echo "Done!"