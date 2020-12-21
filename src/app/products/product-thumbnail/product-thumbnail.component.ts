import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/services/product';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styles: []
})
export class ProductThumbnailComponent implements OnInit {
  @Input("pd") product: Product;
  @Output("pde") parentData: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }


  SendToParent() {
    let name = prompt("Enter Name");
    this.parentData.emit(name);
  }

}
