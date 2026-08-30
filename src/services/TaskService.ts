import type { Task, TaskStatus, Priority, TaskStats } from "../types";
import { TaskRepository } from "../repositories/TaskRepository";
import { isJudulValid } from "../utils/validasi";

export class TaskService {
  private repo: TaskRepository;

  constructor(repo: TaskRepository) {
    this.repo = repo;
  }

  tambahTask(judul: string, prioritas: Priority = "medium"): Task {
    if (!isJudulValid(judul)) {
      throw new Error("Judul task minimal 3 karakter!");
    }
    return this.repo.create({ judul, prioritas });
  }

  getSemuaTask(): Task[] {
    return this.repo.findAll();
  }

  getTaskByStatus(status: TaskStatus): Task[] {
    return this.repo.findByStatus(status);
  }

  ubahStatus(id: number, status: TaskStatus): Task | undefined {
    return this.repo.updateStatus(id, status);
  }

  hapusTask(id: number): boolean {
    return this.repo.delete(id);
  }

  cariTask(keyword: string): Task[] {
    return this.repo.search(keyword);
  }

  getStats(): TaskStats {
    const semua = this.repo.findAll();
    const done = semua.filter((t: Task) => t.status === "done").length;

    return {
      total: semua.length,
      todo: semua.filter((t: Task) => t.status === "todo").length,
      inProgress: semua.filter((t: Task) => t.status === "in_progress").length,
      done,
      persentaseSelesai: semua.length === 0 ? 0 : Math.round((done / semua.length) * 100),
    };
  }
}