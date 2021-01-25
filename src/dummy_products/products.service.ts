import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "./products.model";

@Injectable()
export class ProductsService{
    constructor(
        @InjectModel('Products') private productModel: Model<Product> 
    ) {}

    //private products: Product[] = [];

    async addProduct(title: string, desc: string, price: number){
        const newProduct = new this.productModel({
            product_title: title,
            product_desc: desc,
            product_price: price,
        });
        const res = await newProduct.save();
        //console.log(res);
        return res.id as string;
    }

    async getProducts(){
        const products = await this.productModel.find().exec();
        return products;
    }

    async getSingleProduct(id: string){
        const product = await this.findProduct(id);
        return {
            id: product._id,
            title: product.product_title,
            desc: product.product_desc,
            price: product.product_price,
        };
    }

    async updateProduct(id: string, title: string, desc: string, price: number){
        const updatedProduct = await this.findProduct(id);

        if (title){
            updatedProduct.product_title = title;
        }

        if (desc){
            updatedProduct.product_desc = desc;
        }

        if (price){
            updatedProduct.product_price = price;
        }

        updatedProduct.save();
        return updatedProduct;
        //this.products[index] = updatedProduct;
    }

    async deleteProduct(id: string){
        const res = await this.productModel.deleteOne({_id: id}).exec();
        if (res.n === 0){
            throw new NotFoundException("Product not found!");
        }
    }

    private async findProduct(id: string): Promise<Product>{
        let product;

        try{
            product = await this.productModel.findById(id);
        } catch (error){
            throw new NotFoundException("Product not found!");
        }
        
        // if(!product){
        //     throw new NotFoundException("Product not found!");
        // }

        console.log(product);
        return product;
    }
}