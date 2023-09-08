import { TableParser } from "../tableParser";

const databaseParser = new TableParser("Database");

databaseParser.processFile().catch((error) => {
  databaseParser.logError(error);
});
