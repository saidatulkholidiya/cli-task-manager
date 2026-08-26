import { Priority, TaskStatus } from "../types/index.js";

export function isJudulValid(judul: string): boolean {
  return judul.trim().length >= 3;
}

export function isIdValid(id: unknown): id is number {
  return typeof id === "number" && !isNaN(id) && id > 0;
}

export function isPriorityValid(p: string): p is Priority {
  return ["low", "medium", "high", "urgent"].includes(p as Priority);
}

export function isStatusValid(s: string): s is TaskStatus {
  return ["todo", "in_progress", "done"].includes(s as TaskStatus);
}