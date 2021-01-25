import { Controller, Post, Body, Get, Param, Patch, Delete, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from '../permissions.decorator';
import { PermissionsGuard } from '../permissions.guard';
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}

    @Post()
    @UseGuards(AuthGuard('jwt'), PermissionsGuard)
    @Permissions('create:products')
    async addProduct(
        @Body('title') prodTitle: string,
        @Body('desc') prodDesc: string,
        @Body('price') prodPrice: number,
    ) {
        const generatedId = await this.productsService.addProduct(
            prodTitle, 
            prodDesc, 
            prodPrice,
        );
    return { id: generatedId };
    }

    @Get()
    async getAllProducts(){
        const products = await this.productsService.getProducts();
        return products;
    }

    @Get(':id')
    async getSingleProduct(
        @Param ('id') prodId: string
    ) {
        const singelProduct = await this.productsService.getSingleProduct(prodId);
        return singelProduct;
    }

    @Patch(':id')
    @UseGuards(AuthGuard('jwt'), PermissionsGuard)
    @Permissions('update:products')
    async updateProduct(
        @Param ('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('desc') prodDesc: string,
        @Body('price') prodPrice: number,
    ) {
        const updatedProduct = await this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return updatedProduct;
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'), PermissionsGuard)
    @Permissions('delete:products')
    async deleteProduct(
        @Param ('id') prodId: string
    ) {
        await this.productsService.deleteProduct(prodId);
    }
}