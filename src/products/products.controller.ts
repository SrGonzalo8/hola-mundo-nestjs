import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import { Product } from './interfaces/product/product.interface';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto/product.dto';
import { Patch } from '@nestjs/common';
@Controller('products')
export class ProductsController {
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
createProduct(
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
@Delete(':id')
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param('id') id: number) {
this.productsService.delete(id);
}

@Post()
@HttpCode(HttpStatus.NO_CONTENT)
createProduct2(
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

}
