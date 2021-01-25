import { Model } from "mongoose";
import { Product } from "./products.model";
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Product>);
    addProduct(title: string, desc: string, price: number): Promise<string>;
    getProducts(): Promise<Product[]>;
    getSingleProduct(id: string): Promise<{
        id: string;
        title: string;
        desc: string;
        price: number;
    }>;
    updateProduct(id: string, title: string, desc: string, price: number): Promise<Product>;
    deleteProduct(id: string): Promise<void>;
    private findProduct;
}
