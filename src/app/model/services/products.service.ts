import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    { id: 1, name: 'Adidas', price: 150.0, description: 'Preto com fundo branco', image: '/.adidasBranco.webp'},
    { id: 2, name: 'Vans Preto ', price: 750.5, description: 'Branco em detalhe preto', image: './vans.webp' },
    { id: 3, name: 'Panda', price: 600.0, description: 'Preto com detalhes em branco', image: './nikeDunk.webp' }
  ];
  getProducts(): Iproducts[] {
    return this.products;
  }
}
