import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class DecemeberBatchInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.auth.token;
        const headers = req.headers.set("authorization", "Bearer " + token)
        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }
}