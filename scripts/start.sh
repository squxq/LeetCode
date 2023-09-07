#!/bin/bash

set -e

filename=$1

if [ -z "$filename" ]; then
  echo "Please specify a Typescript file to run."
  exit 1
fi

npx tsc --project ../tsconfig.json ${filename}.ts || { echo "Error compiling $filename."; exit 1; }

node dist/${filename}.js || { echo "Error running $filename."; exit 1; }
