import { TableParser } from "../tableParser";

const shellParser = new TableParser("Shell");

shellParser.processFile().catch((error) => {
  shellParser.logError(error);
});
