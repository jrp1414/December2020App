import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Product, productList } from './product';

@Injectable({
  providedIn:"root"
})
export class ProductService {
  private products:Product[]=productList;
  constructor(private logger:LoggerService) { }

  getProducts():Product[]{
    this.logger.log("Get Products Called");
    return this.products;
  }
}
