import { Component, OnInit } from '@angular/core';
import { Description, Product } from '../services/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  product: Product;
  constructor() {
    let prod = new Product(1,"Test","GDN-00112",new Date(),34.45,3,"");
    console.log(prod);
  }

  ngOnInit(): void {
  }



}
