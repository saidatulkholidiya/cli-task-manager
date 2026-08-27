"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./cli/parser");
const commands_1 = require("./cli/commands");
const TaskService_1 = require("./services/TaskService");
const TaskRepository_1 = require("./repositories/TaskRepository");
const StorageService_1 = require("./services/StorageService");
// 1. Memuat data dari file json
const dataTersimpan = StorageService_1.StorageService.muat();
// 2. Inisialisasi Repository dan Service
const repository = new TaskRepository_1.TaskRepository(dataTersimpan);
const service = new TaskService_1.TaskService(repository);
// 3. Eksekusi Command dari CLI
const command = (0, parser_1.parseArgs)(process.argv.slice(2));
(0, commands_1.jalankanCommand)(command, service);
// 4. Menyimpan data kembali ke file json
StorageService_1.StorageService.simpan(service.getSemuaTask());
