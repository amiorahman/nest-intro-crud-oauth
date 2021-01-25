import * as mongoose from 'mongoose';
export declare const ProductSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>>;
export interface Product extends mongoose.Document {
    _id: string;
    product_title: string;
    product_desc: string;
    product_price: number;
}
