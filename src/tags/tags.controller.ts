import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Product } from 'src/products/interfaces/product/product.interface';
import { ProductsService } from 'src/products/products.service';
@Controller('products')
export class ProductsController {
constructor(private readonly productsService: ProductsService) { }
@Get()
getAllProducts(): Product[] {
return this.productsService.getAll();
}}