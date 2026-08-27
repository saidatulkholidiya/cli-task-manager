"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jalankanCommand = jalankanCommand;
const display_1 = require("./display");
function jalankanCommand(command, service) {
    switch (command.type) {
        case "add": {
            try {
                const task = service.tambahTask(command.judul, command.prioritas);
                return (0, display_1.tampilkanSukses)(`Task #${task.id} berhasil ditambahkan`);
            }
            catch (error) {
                return (0, display_1.tampilkanError)(error.message || "Gagal menambahkan task");
            }
        }
        case "list": {
            const tasks = command.filterStatus
                ? service.getTaskByStatus(command.filterStatus)
                : service.getSemuaTask();
            return (0, display_1.tampilkanDaftarTask)(tasks);
        }
        case "done": {
            const task = service.ubahStatus(command.id, "done");
            if (!task)
                return (0, display_1.tampilkanError)(`Task #${command.id} tidak ditemukan`);
            return (0, display_1.tampilkanSukses)(`Task #${task.id} ditandai selesai`);
        }
        case "progress": {
            const task = service.ubahStatus(command.id, "in_progress");
            if (!task)
                return (0, display_1.tampilkanError)(`Task #${command.id} tidak ditemukan`);
            return (0, display_1.tampilkanSukses)(`Task #${task.id} diubah ke in_progress`);
        }
        case "search": {
            const hasil = service.cariTask(command.keyword);
            return (0, display_1.tampilkanDaftarTask)(hasil);
        }
        case "delete": {
            const berhasil = service.hapusTask(command.id);
            if (!berhasil)
                return (0, display_1.tampilkanError)(`Task #${command.id} tidak ditemukan`);
            return (0, display_1.tampilkanSukses)(`Task #${command.id} berhasil dihapus`);
        }
        case "stats": {
            const stats = service.getStats();
            return (0, display_1.tampilkanStats)(stats);
        }
        case "help": {
            return (0, display_1.tampilkanHelp)();
        }
        case "unknown":
            return (0, display_1.tampilkanError)(`Perintah tidak dikenal: "${command.input}". Ketik 'help' untuk bantuan.`);
    }
}
