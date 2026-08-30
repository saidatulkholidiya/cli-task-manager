import { parseArgs } from "./cli/parser";
import { jalankanCommand } from "./cli/commands";
import { TaskService } from "./services/TaskService";
import { TaskRepository } from "./repositories/TaskRepository";
import { StorageService } from "./services/StorageService";

const dataTersimpan = StorageService.muat();
const repository = new TaskRepository(dataTersimpan);
const service = new TaskService(repository);

const command = parseArgs(process.argv.slice(2));
jalankanCommand(command, service);

StorageService.simpan(service.getSemuaTask());