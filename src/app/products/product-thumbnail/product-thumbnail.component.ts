import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

import { Product } from 'src/app/services/product';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styles: []
})
export class ProductThumbnailComponent implements OnInit {
  @Input("pd") product: Product;
  @Output("pde") parentData: EventEmitter<string> = new EventEmitter<string>();
  constructor(private logger:LoggerService) { }

  ngOnInit(): void {
    this.logger.notify.subscribe((data:string)=>{
      this.logger.log("In Product Thumbails : "+data);
    });
  }


  SendToParent() {
    let name = prompt("Enter Name");
    this.logger.log(name);
    this.parentData.emit(name);
  }

}
