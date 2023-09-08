import { TableParser } from "../tableParser";

const algorithmsParser = new TableParser("Algorithms");

algorithmsParser.processFile().catch((error) => {
  algorithmsParser.logError(error);
});
