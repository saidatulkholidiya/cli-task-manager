"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
class TaskRepository {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    create(data) {
        const now = new Date().toISOString();
        const newTask = {
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
    findAll() {
        return this.tasks;
    }
    findByStatus(status) {
        return this.tasks.filter((t) => t.status === status);
    }
    updateStatus(id, status) {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            task.status = status;
            task.updatedAt = new Date().toISOString();
        }
        return task;
    }
    delete(id) {
        const idx = this.tasks.findIndex((t) => t.id === id);
        if (idx !== -1) {
            this.tasks.splice(idx, 1);
            return true;
        }
        return false;
    }
    search(keyword) {
        return this.tasks.filter((t) => t.judul.toLowerCase().includes(keyword.toLowerCase()));
    }
}
exports.TaskRepository = TaskRepository;
