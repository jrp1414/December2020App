import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductService } from './product.service';

@Injectable({providedIn: 'root'})
export class ProductGuard implements CanActivate {
    constructor(private ps:ProductService,private router:Router,private messageService:MessageService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let id = +route.params.id;
        if (this.ps.getProduct(id)) {
            return true;
        }
        // this.ps.notify.emit(true);
        // setTimeout(() => {
        //     this.messageService.add({severity:'error', summary: 'Error', detail: 'Invalid Product Id'});
        // }, 1000);
        this.router.navigate(["/products"]);

        return false;
    }
}