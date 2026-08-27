import type { Task, TaskStats } from "../types/task.types";

export function tampilkanDaftarTask(tasks: Task[]): void {
  if (tasks.length === 0) {
    console.log("Belum ada task.");
    return;
  }

  console.log("ID   STATUS        PRIORITAS   JUDUL");
  console.log("─────────────────────────────────────────────────────────");

  tasks.forEach((t) => {
    let statusLabel = "[ ] todo";
    if (t.status === "in_progress") statusLabel = "[~] progress";
    if (t.status === "done") statusLabel = "[x] done";

    const baris = `${String(t.id).padEnd(4)}${statusLabel.padEnd(14)}${t.prioritas.padEnd(11)}${t.judul}`;
    console.log(baris);
  });

  console.log("─────────────────────────────────────────────────────────");
  console.log(`Total: ${tasks.length} task\n`);
}

export function tampilkanStats(stats: TaskStats): void {
  console.log("\n=== STATISTIK TASK ===");
  console.log(`Total Task  : ${stats.total}`);
  console.log(`Todo        : ${stats.todo}`);
  console.log(`In Progress : ${stats.inProgress}`);
  console.log(`Done        : ${stats.done}\n`);
}

export function tampilkanHelp(): void {
  console.log("\n=== DAFTAR PERINTAH CLI ===");
  console.log("add <judul>             : Menambahkan task baru");
  console.log("list [status]           : Menampilkan daftar task (semua/todo/in_progress/done)");
  console.log("done <id>               : Menandai task selesai");
  console.log("update <id> <judul>     : Mengubah judul task");
  console.log("status <id> <status>    : Mengubah status task (todo/in_progress/done)");
  console.log("priority <id> <prioritas>: Mengubah prioritas task (low/medium/high)");
  console.log("delete <id>             : Menghapus task");
  console.log("stats                   : Menampilkan statistik task");
  console.log("help                    : Menampilkan daftar bantuan ini\n");
}

export function tampilkanError(pesan: string): void {
  console.error(`[ERROR] ${pesan}`);
}

export function tampilkanSukses(pesan: string): void {
  console.log(`[SUKSES] ${pesan}`);
}