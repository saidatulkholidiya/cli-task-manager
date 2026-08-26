"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./cli/index.js");
const args = process.argv.slice(2);
const command = (0, index_js_1.parseArgs)(args);
console.log("Command terparsing:", command);
