import { Controller, Get, Param } from '@nestjs/common';
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
findWithSize( @Param() params) {
return `En esta ruta obtenemos el producto ${params.id}, pero en su tamaño ${params.size}`;
}
}
