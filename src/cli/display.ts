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
  console.log(`Total Task       : ${stats.total}`);
  console.log(`Todo             : ${stats.todo}`);
  console.log(`In Progress      : ${stats.inProgress}`);
  console.log(`Done             : ${stats.done}`);
  console.log(`Selesai (%)      : ${stats.persentaseSelesai}%\n`);
}

export function tampilkanHelp(): void {
  console.log("\n=== DAFTAR PERINTAH CLI ===");
  console.log("add \"Judul task\"       : Menambahkan task baru");
  console.log("list                   : Menampilkan semua task");
  console.log("list --status <status> : Filter task berdasarkan status (todo/in_progress/done)");
  console.log("done <id>              : Menandai task selesai");
  console.log("progress <id>          : Menandai task sedang dikerjakan");
  console.log("delete <id>            : Menghapus task");
  console.log("search \"kata kunci\"    : Mencari task berdasarkan kata kunci");
  console.log("stats                  : Menampilkan statistik task");
  console.log("help                   : Menampilkan bantuan ini\n");
}

export function tampilkanError(pesan: string): void {
  console.error(`[ERROR] ${pesan}`);
}

export function tampilkanSukses(pesan: string): void {
  console.log(`[SUKSES] ${pesan}`);
}