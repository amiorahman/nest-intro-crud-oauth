import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    product_title: {type: String, required:true},
    product_desc: String,
    product_price: {type: Number, required:true},
});

export interface Product extends mongoose.Document{
    _id: string;
    product_title: string;
    product_desc: string;
    product_price: number;
}