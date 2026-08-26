import { TaskRepository } from "./repositories/index.js";
import { TaskService } from "./services/index.js";
import { parseArgs } from "./cli/index.js";

function main(): void {
  const repo = new TaskRepository();
  const service = new TaskService(repo);

  const args = process.argv.slice(2);
  const command = parseArgs(args);

  console.log("Parsed Command:", command);

  if (command.type === "add") {
    const task = service.tambahTask(command.judul);
    console.log("Task Berhasil Ditambahkan:", task);
  } else if (command.type === "list") {
    console.log("Daftar Task:", service.getSemuaTask());
  } else if (command.type === "stats") {
    console.log("Statistik:", service.getStats());
  }
}

main();