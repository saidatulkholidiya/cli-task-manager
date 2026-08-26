"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskModel {
    constructor(id, judul, prioritas = "medium") {
        this.id = id;
        this.judul = judul;
        this.status = "todo";
        this.prioritas = prioritas;
        this.createdAt = new Date().toISOString();
        this.updatedAt = this.createdAt;
    }
    get isOverdue() {
        if (!this.deadline || this.status === "done")
            return false;
        return new Date(this.deadline) < new Date();
    }
    get umurHari() {
        const selisih = Date.now() - new Date(this.createdAt).getTime();
        return Math.floor(selisih / (1000 * 60 * 60 * 24));
    }
}
exports.default = TaskModel;
