import * as fs from "fs";
import * as readline from "readline";

const filePath = "README.md";

// Function to log the table to the console
const logTable = (tableRows: string[]): void => {
  for (const row of tableRows) {
    console.log(row);
  }
};

// Read and process the README.md file
const processReadmeFile = async (): Promise<void> => {
  const tableRows: string[] = [];

  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let insideTable = false;

  for await (const line of rl) {
    if (line.startsWith("|")) {
      insideTable = true;
    } else if (insideTable && line.trim() === "") {
      insideTable = false;
    }

    if (insideTable) {
      tableRows.push(line);
    }
  }

  logTable(tableRows);
};

processReadmeFile().catch((error) => {
  console.error(`Error reading README.md: ${error}`);
});
