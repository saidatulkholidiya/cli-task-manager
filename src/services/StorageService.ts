import * as fs from "fs";
import * as path from "path";
import type { Task } from "../types/task.types";

const DATA_DIR = path.join(__dirname, "../../data");
const DATA_FILE = path.join(DATA_DIR, "tasks.json");

export class StorageService {
  static muat(): Task[] {
    try {
      if (!fs.existsSync(DATA_FILE)) return [];
      const isi = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(isi) as Task[];
    } catch (error) {
      console.error("Gagal memuat data, memulai dengan data kosong.");
      return [];
    }
  }

  static simpan(tasks: Task[]): void {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2), "utf-8");
    } catch (error) {
      console.error("Gagal menyimpan data:", error);
    }
  }
}