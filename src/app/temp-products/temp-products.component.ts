import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'temp-products',
  templateUrl: './temp-products.component.html',
  styles: []
  // providers: [LoggerService]
})
export class TempProductsComponent implements OnInit {

  constructor(private logger:LoggerService) { }

  ngOnInit(): void {
    this.logger.notify.subscribe((data:string)=>{
      this.logger.log("In Temp Products : "+data);
    });
  }

}
