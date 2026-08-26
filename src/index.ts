import { parseArgs } from "./cli/index.js";

const args = process.argv.slice(2);
const command = parseArgs(args);
console.log("Command terparsing:", command);