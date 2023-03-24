import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Res, Put } from '@nestjs/common';
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
find(@Res() response, @Param('id') id: number) {
if(id < 100) {
return response.status(HttpStatus.OK).send(`Página del producto ${id}`);
} else {
return response.status(HttpStatus.NOT_FOUND).send(`Producto inexistente`);
}
}

@Get(':id/:size')
findWithSize(@Param('id') id: number, @Param('size') size: string ) {
return `Página de detalle de producto ${id}, en tamaño ${size}`;
}
@Post()
createProduct(
@Body('name') name: string,
@Body('description') description: string
) {
return `Creo el producto ${name} con descripción ${description}.`;
}

@Post()
@HttpCode(HttpStatus.NO_CONTENT)
NoContentProduct(@Body() body) {
return body;
}
@Get('ruta-error-404')
@HttpCode(HttpStatus.NOT_FOUND)
rutaConError404() {
return 'Esto es un error 404!!';
}
@Put(':id')
update(@Param('id') id: number, @Body() body) {
return `Estás haciendo una operación de actualización del recurso ${id}
con ${body.name} y ${body.description}`;
}
}
