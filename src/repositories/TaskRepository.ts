import { Task, TaskStatus, Priority } from "../types/index.js";

export class TaskRepository {
  private tasks: Task[] = [];
  private nextId = 1;

  constructor(initialTasks: Task[] = []) {
    this.tasks = initialTasks;
    if (initialTasks.length > 0) {
      this.nextId = Math.max(...initialTasks.map((t) => t.id)) + 1;
    }
  }

  create(data: { judul: string; prioritas: Priority }): Task {
    const now = new Date().toISOString();
    const newTask: Task = {
      id: this.nextId++,
      judul: data.judul,
      status: "todo",
      prioritas: data.prioritas,
      createdAt: now,
      updatedAt: now,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findByStatus(status: TaskStatus): Task[] {
    return this.tasks.filter((t) => t.status === status);
  }

  updateStatus(id: number, status: TaskStatus): Task | undefined {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.status = status;
      task.updatedAt = new Date().toISOString();
    }
    return task;
  }

  delete(id: number): boolean {
    const idx = this.tasks.findIndex((t) => t.id === id);
    if (idx !== -1) {
      this.tasks.splice(idx, 1);
      return true;
    }
    return false;
  }

  search(keyword: string): Task[] {
    return this.tasks.filter((t) =>
      t.judul.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}