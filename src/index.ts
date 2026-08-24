import { Task } from "./types";

const demoTask: Task = {
  id: 1,
  judul: "Setup Project CLI Task Manager",
  status: "todo",
  prioritas: "high",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

console.log("=== CLI Task Manager Initialized ===");
console.log(`Task Demo: [${demoTask.id}] ${demoTask.judul} (${demoTask.status})`);