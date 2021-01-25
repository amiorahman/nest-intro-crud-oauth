"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async addProduct(title, desc, price) {
        const newProduct = new this.productModel({
            product_title: title,
            product_desc: desc,
            product_price: price,
        });
        const res = await newProduct.save();
        return res.id;
    }
    async getProducts() {
        const products = await this.productModel.find().exec();
        return products;
    }
    async getSingleProduct(id) {
        const product = await this.findProduct(id);
        return {
            id: product._id,
            title: product.product_title,
            desc: product.product_desc,
            price: product.product_price,
        };
    }
    async updateProduct(id, title, desc, price) {
        const updatedProduct = await this.findProduct(id);
        if (title) {
            updatedProduct.product_title = title;
        }
        if (desc) {
            updatedProduct.product_desc = desc;
        }
        if (price) {
            updatedProduct.product_price = price;
        }
        updatedProduct.save();
        return updatedProduct;
    }
    async deleteProduct(id) {
        const res = await this.productModel.deleteOne({ _id: id }).exec();
        if (res.n === 0) {
            throw new common_1.NotFoundException("Product not found!");
        }
    }
    async findProduct(id) {
        let product;
        try {
            product = await this.productModel.findById(id);
        }
        catch (error) {
            throw new common_1.NotFoundException("Product not found!");
        }
        console.log(product);
        return product;
    }
};
ProductsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Products')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map