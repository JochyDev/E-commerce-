import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsServices: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts(){
    this.productsServices.getAllProducts()
    .subscribe(products => {
      this.products = products
    })
  }

  deleteProduct(id: string){
    this.productsServices.deleteProduct(id)
    .subscribe( rta => {
      this.fetchProducts();
    })
  }

}
