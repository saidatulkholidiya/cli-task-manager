"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./repositories/index.js");
const index_js_2 = require("./services/index.js");
const index_js_3 = require("./cli/index.js");
function main() {
    const repo = new index_js_1.TaskRepository();
    const service = new index_js_2.TaskService(repo);
    const args = process.argv.slice(2);
    const command = (0, index_js_3.parseArgs)(args);
    console.log("Parsed Command:", command);
    if (command.type === "add") {
        const task = service.tambahTask(command.judul);
        console.log("Task Berhasil Ditambahkan:", task);
    }
    else if (command.type === "list") {
        console.log("Daftar Task:", service.getSemuaTask());
    }
    else if (command.type === "stats") {
        console.log("Statistik:", service.getStats());
    }
}
main();
