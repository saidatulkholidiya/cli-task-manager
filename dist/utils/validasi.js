"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJudulValid = isJudulValid;
exports.isIdValid = isIdValid;
exports.isPriorityValid = isPriorityValid;
exports.isStatusValid = isStatusValid;
function isJudulValid(judul) {
    return judul.trim().length >= 3;
}
function isIdValid(id) {
    return typeof id === "number" && !isNaN(id) && id > 0;
}
function isPriorityValid(p) {
    return ["low", "medium", "high", "urgent"].includes(p);
}
function isStatusValid(s) {
    return ["todo", "in_progress", "done"].includes(s);
}
