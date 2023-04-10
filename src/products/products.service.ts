<<<<<<< HEAD
import { Injectable } from '@nestjs/common';
import { ProductPatchDto } from './dto/product-patch.dto/product-patch.dto';
import { Product } from './interfaces/product/product.interface';

=======
import { Injectable,NotFoundException,HttpException,HttpStatus } from '@nestjs/common';
import { Product } from './interfaces/product/product.interface';
>>>>>>> parent of d24bc63 (dto)
@Injectable()
export class ProductsService {
    patch(id: number, body: ProductPatchDto) {
        let previousProduct = this.getId(id);
        let product: Product = {
        ...previousProduct,
        ...body
        }
        this.products = this.products.map((item: Product) => {
        return item.id == id ? product : item;
        });
        }
getId(id: number) {
    throw new Error('Method not implemented.');
}
update(id: number, body: any) {
    throw new Error('Method not implemented.');
}
delete(id: number) {
    throw new Error('Method not implemented.');
}
private products = [
{
id: 1,
name: 'Vela aromática',
description: 'Esta vela lanza ricos olores',
},
{
id: 2,
name: 'Marco de fotos pequeño',
description: 'Marco ideal para tus fotos 10x15',
}
];
getAll() {
return this.products;
}
insert(product) {
this.products = [
...this.products,
product
];
}
<<<<<<< HEAD

}
=======
update(id: number, body: any) {
let product: Product = {
id,
name: body.name,
description: body.description,
}
this.products = this.products.map( (item: Product) => {
console.log(item, id, item.id == id);
return item.id == id ? product : item;
});
}
delete(id: number) {
    const product = this.products.find((item: Product) => item.id == id);
    if(product) {
    this.products = this.products.filter( (item: Product) => item.id != id );
    } else {
    throw new HttpException(`No existe el producto ${id}`, HttpStatus.NOT_FOUND);
    }
    }
private lastId(): number {
return this.products[this.products.length - 1].id;
}
}
>>>>>>> parent of d24bc63 (dto)
