"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTanggal = formatTanggal;
function formatTanggal(date) {
    return new Date(date).toLocaleDateString("id-ID");
}
