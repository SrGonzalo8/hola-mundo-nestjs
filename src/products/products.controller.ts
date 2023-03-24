import { Controller, Get, Param, Post } from '@nestjs/common';
@Controller('products')
export class ProductsController {
@Get()
getHelloInProducts(): string {
return "Estamos en productos!!!";
}
@Get('hot')
getSpecialProducts(): string {
return "Te vamos a mostrar los productos más calientes!!";
}
@Get(':id')
find( @Param() params) {
return `Estás consultando el producto ${params.id}`;
}
@Get(':id/:size')
findWithSize(@Param('id') id: number, @Param('size') size: string ) {
return `Página de detalle de producto ${id}, en tamaño ${size}`;
}

@Post()
createProduct() {
return 'Estamos atendiendo una solicitud de tipo Post';
}
}