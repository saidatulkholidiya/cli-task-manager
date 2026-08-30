"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const validasi_1 = require("../utils/validasi");
class TaskService {
    constructor(repo) {
        this.repo = repo;
    }
    tambahTask(judul, prioritas = "medium") {
        if (!(0, validasi_1.isJudulValid)(judul)) {
            throw new Error("Judul task minimal 3 karakter!");
        }
        return this.repo.create({ judul, prioritas });
    }
    getSemuaTask() {
        return this.repo.findAll();
    }
    getTaskByStatus(status) {
        return this.repo.findByStatus(status);
    }
    ubahStatus(id, status) {
        return this.repo.updateStatus(id, status);
    }
    hapusTask(id) {
        return this.repo.delete(id);
    }
    cariTask(keyword) {
        return this.repo.search(keyword);
    }
    getStats() {
        const semua = this.repo.findAll();
        const done = semua.filter((t) => t.status === "done").length;
        return {
            total: semua.length,
            todo: semua.filter((t) => t.status === "todo").length,
            inProgress: semua.filter((t) => t.status === "in_progress").length,
            done,
            persentaseSelesai: semua.length === 0 ? 0 : Math.round((done / semua.length) * 100),
        };
    }
}
exports.TaskService = TaskService;
