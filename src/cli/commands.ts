import type { Command } from "../types";
import { TaskService } from "../services/TaskService";
import {
  tampilkanDaftarTask,
  tampilkanStats,
  tampilkanHelp,
  tampilkanError,
  tampilkanSukses,
} from "./display";

export function jalankanCommand(command: Command, service: TaskService): void {
  switch (command.type) {
    case "add": {
      try {
        const task = service.tambahTask(command.judul, command.prioritas);
        return tampilkanSukses(`Task #${task.id} berhasil ditambahkan`);
      } catch (error: unknown) {
        const msg = error instanceof Error ? error.message : "Gagal menambahkan task";
        return tampilkanError(msg);
      }
    }

    case "list": {
      const tasks = command.filterStatus
        ? service.getTaskByStatus(command.filterStatus)
        : service.getSemuaTask();
      return tampilkanDaftarTask(tasks);
    }

    case "done": {
      const task = service.ubahStatus(command.id, "done");
      if (!task) return tampilkanError(`Task #${command.id} tidak ditemukan`);
      return tampilkanSukses(`Task #${command.id} ditandai selesai`);
    }

    case "progress": {
      const task = service.ubahStatus(command.id, "in_progress");
      if (!task) return tampilkanError(`Task #${command.id} tidak ditemukan`);
      return tampilkanSukses(`Task #${command.id} diubah ke in_progress`);
    }

    case "search": {
      const hasil = service.cariTask(command.keyword);
      return tampilkanDaftarTask(hasil);
    }

    case "delete": {
      const berhasil = service.hapusTask(command.id);
      if (!berhasil) return tampilkanError(`Task #${command.id} tidak ditemukan`);
      return tampilkanSukses(`Task #${command.id} berhasil dihapus`);
    }

    case "stats": {
      const stats = service.getStats();
      return tampilkanStats(stats);
    }

    case "help": {
      return tampilkanHelp();
    }

    case "unknown":
      return tampilkanError(
        `Perintah tidak dikenal: "${command.input}". Ketik 'help' untuk bantuan.`
      );
  }
}