"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
    product_title: { type: String, required: true },
    product_desc: String,
    product_price: { type: Number, required: true },
});
//# sourceMappingURL=products.model.js.map