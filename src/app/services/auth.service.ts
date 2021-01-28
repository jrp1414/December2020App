import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private httpClient: HttpClient) { }    
    private baseUrl:string = "http://localhost:44319/";

    public isAuthenticated:boolean=false;

    SignUp(user:any):Observable<any>{
        return this.httpClient.post(this.baseUrl+"SignUpUser",user);
    }

    SignIn(User:any):Observable<any>{
        return this.httpClient.post(this.baseUrl + "SignIn", User);
    }
}