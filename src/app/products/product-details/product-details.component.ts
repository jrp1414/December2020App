import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/services/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: []
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private ps: ProductService, private router: Router,public messageService:MessageService) { }

  ngOnInit(): void {
    // let id = +this.route.snapshot.params.id;
    // this.product = this.ps.getProduct(id);
    this.route.params.subscribe((parms) => {
      // console.log(parms);
      let id = +parms.id;
      // console.log(parms.code);
      // console.log(parms.name);
      this.product = this.ps.getProduct(id);
    });

    // this.route.queryParams.subscribe((qparms)=>{
    //   console.log(qparms.code);
    //   console.log(qparms.name);
    // });

    this.route.fragment.subscribe((f) => {
      console.log(f);
    });
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Product Id' });
  }

  NavigateBack() {
    this.router.navigate(["products"]);
  }

}
