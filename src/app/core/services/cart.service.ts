import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[] = []
  private cart = new BehaviorSubject<Product[]>([])

  cart$ = this.cart.asObservable()

  constructor() { }

  addCart(product: Product){
    this.products = [...this.products, product]
    console.log(this.products)
    this.cart.next(this.products)
  }

}
