import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Description, Product, productList } from '../services/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
    `div{
      background-color: chartreuse;
  }
  .green{
    background-color:green;
    color:white;
    font-weight:bold;
  }
  .red{
    background-color:red;
    color:blue;
  }
  `
  ],
  encapsulation:ViewEncapsulation.Emulated
})
export class ProductsComponent {
  filterText:string="";
  products: Product[]= productList;
  constructor() {
    // for (let index = 0; index < array.length; index++) {
      
      
    // }
    // for (let key in this.products) {
    //   console.log(key);
    //   console.log(this.products[key]);
    // }    

    // for (let prod of this.products) {
    //   console.log(prod);
    // }
  }

  getClass(product:Product){
    if (product.starRating>3) {
      return "green";
    }
    return "red";
  }

}

