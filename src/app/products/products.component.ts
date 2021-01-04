import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LoggerService } from '../services/logger.service';
import { Description, Product, productList } from '../services/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
    `
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
  encapsulation: ViewEncapsulation.Emulated,
  // providers: [LoggerService] 
})
export class ProductsComponent implements OnInit {
  filterText: string = "";
  products: Product[];
  constructor(private logger:LoggerService,private ps:ProductService,private messageService: MessageService) {
    // for (let index = 0; index < array.length; index++) {


    // }
    // for (let key in this.products) {
    //   console.log(key);
    //   console.log(this.products[key]);
    // }    

    // for (let prod of this.products) {
    //   console.log(prod);
    // }

    this.products = this.ps.getProducts();
  }
  ngOnInit(): void {
    this.ps.notify.subscribe((flag)=>{
      setTimeout(() => {
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Invalid Product Id'});
      }, 0);
    });
  }

  getClass(product: Product) {
    if (product.starRating > 3) {
      return "green";
    }
    return "red";
  }

  ReceivedFromChild(data) {
    console.log(data);
  }

  TestPipe() {
    this.logger.notify.emit("Fom Products Component");
    this.products.push(
      new Product(11, "Garden Crawl", "GDN-0023", new Date(), 25.45, 4, "", false,
        new Description("Garden Crawl", "garen@gmail.com")));
  }

}

