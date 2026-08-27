import { parseArgs } from "./cli/parser";
import { jalankanCommand } from "./cli/commands";
import { TaskService } from "./services/TaskService";
import { TaskRepository } from "./repositories/TaskRepository";
import { StorageService } from "./services/StorageService";

// 1. Memuat data dari file json
const dataTersimpan = StorageService.muat();

// 2. Inisialisasi Repository dan Service
const repository = new TaskRepository(dataTersimpan);
const service = new TaskService(repository);

// 3. Eksekusi Command dari CLI
const command = parseArgs(process.argv.slice(2));
jalankanCommand(command, service);

// 4. Menyimpan data kembali ke file json
StorageService.simpan(service.getSemuaTask());