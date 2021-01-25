import { ProductsService } from "./products.service";
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): Promise<{
        id: string;
    }>;
    getAllProducts(): Promise<import("./products.model").Product[]>;
    getSingleProduct(prodId: string): Promise<{
        id: string;
        title: string;
        desc: string;
        price: number;
    }>;
    updateProduct(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number): Promise<import("./products.model").Product>;
    deleteProduct(prodId: string): Promise<void>;
}
