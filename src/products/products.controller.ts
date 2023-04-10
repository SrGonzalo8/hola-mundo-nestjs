<<<<<<< HEAD
import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { Product } from './interfaces/product/product.interface';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto/product.dto';
import { ProductPatchDto } from './dto/product-patch.dto/product-patch.dto';
=======
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Product } from './interfaces/product/product.interface';
import { ProductsService } from './products.service';
>>>>>>> parent of d24bc63 (dto)
@Controller('products')
export class ProductsController {
products: any;
constructor(private readonly productsService: ProductsService) { }
@Get()
getAllProducts(): Product[] {
return this.productsService.getAll();
}
@Get(':id')
find(@Param('id') id: number) {
return this.productsService.getId(id);
}
@Post()
@HttpCode(HttpStatus.NO_CONTENT)
createProducts(//en caso de no funcionar quitar s
@Body() body,
) {
this.productsService.insert(body);
}
@Put(':id')
update(
@Param('id') id: number,
@Body() body,
) {
return this.productsService.update(id, body);
}
delete(id: number) {
    const product = this.products.find((item: Product) => item.id == id);
    if(product) {
    this.products = this.products.filter( (item: Product) => item.id != id );
    } else {
    throw new HttpException(`No existe el producto ${id}`, HttpStatus.NOT_FOUND);
    }
}
<<<<<<< HEAD

getId(id: number): Product {
    const product = this.products.find( (item: Product) => item.id == id);
    if(product) {
    return product;
    } else {
    throw new NotFoundException(`No encontramos el producto ${id}`);
    }
    }
    
    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    createProduct(
    @Body() productDto: ProductDto,
    ) {
    this.productsService.insert(productDto);
    } 
    
    @Patch(':id')
async patch(
@Param('id', ParseIntPipe) id: number,
@Body() body: ProductPatchDto,
) {
return this.productsService.patch(id, body);
}
=======
>>>>>>> parent of d24bc63 (dto)
}
