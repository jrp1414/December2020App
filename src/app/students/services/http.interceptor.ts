import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { tap } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import jwtDecode from 'jwt-decode';

@Injectable()
export class DecemeberBatchInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService, private messageService: MessageService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.auth.token;
        if (token.length > 0) {
            console.log(jwtDecode(token));
        }
        const headers = req.headers.set("authorization", "Bearer " + token)
        const authReq = req.clone({ headers });
        return next.handle(authReq).pipe(tap(() => { }, (error: any) => {
            if (error instanceof HttpErrorResponse) {
                if (error.status !== 401) {
                    return;
                }
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Unauthorized User' });
            }
        }));
    }
}