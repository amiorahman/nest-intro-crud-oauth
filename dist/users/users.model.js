"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    user_name: { type: String, required: true },
    user_pass: { type: String, required: true },
});
//# sourceMappingURL=users.model.js.map