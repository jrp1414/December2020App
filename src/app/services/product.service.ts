import { EventEmitter, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Product, productList } from './product';

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private products: Product[] = productList;
  public notify:EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private logger: LoggerService) { }

  getProducts(): Product[] {
    this.logger.log("Get Products Called");
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((prod) => prod.productId == id);
  }
}
