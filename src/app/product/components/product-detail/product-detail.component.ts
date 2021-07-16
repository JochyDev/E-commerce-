import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id)
      // this.product = this.productsService.getProduct(id)
    }) 
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product
    })
  }

  createProduct(){
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/camiseta.png',
      price: 50000,
      description: 'nuevo producto'
    }
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product)
    })
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      price: 5222222,
      description: 'edicon titulo'
    }
    this.productsService.updateProduct('2', updateProduct)
    .subscribe(product => {
      console.log(product)
    })
  }

  deleteProduct(){
    this.productsService.deleteProduct('2')
    .subscribe(product => {
      console.log(product)
    })
  }
}


