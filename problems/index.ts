import { TableParser } from "./tableParser";

const problemsParser = new TableParser();

problemsParser.processFile().catch((error) => {
  problemsParser.logError(error);
});
