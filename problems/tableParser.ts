import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

type topic = "All" | "Algorithms" | "Database" | "Shell";

export class TableParser {
  private readonly filePath: string;
  private readonly topic: topic;

  constructor(topic: topic = "All") {
    this.filePath = path.join(process.cwd(), "README.md");
    this.topic = topic;
  }

  // Function to log the table to the console
  private logTable(tableRows: string[]): void {
    for (const row of tableRows) {
      console.log(row);
    }
  }

  // Function to read and process the file with an optional filter
  public async processFile(): Promise<void> {
    const tableRows: string[] = [];

    const fileStream = fs.createReadStream(this.filePath);
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

    // Apply the filter based on the 'filterTopic' parameter
    const filteredRows =
      this.topic === "All"
        ? tableRows
        : tableRows.filter((row, index) => {
            const columns = row.split("|");
            return index < 2 || columns[3]?.trim() === this.topic;
          });

    this.logTable(filteredRows);
  }

  // Function to log the occurence of an error
  public logError(error: Error, debug: boolean = false): void {
    if (debug) {
      console.log(`Error reading ${this.filePath}: \n ${error.toString()}`);
    } else {
      console.log(`Error reading ${this.filePath}: \n ${error.message}`);
    }
  }
}
