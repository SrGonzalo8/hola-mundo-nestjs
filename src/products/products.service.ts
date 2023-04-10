import { Injectable } from '@nestjs/common';
import { ProductPatchDto } from './dto/product-patch.dto/product-patch.dto';
import { Product } from './interfaces/product/product.interface';

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

}