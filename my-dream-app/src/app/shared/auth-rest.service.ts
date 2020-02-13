import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.types';

@Injectable({
    providedIn: 'root'
})
export class AuthRestService {
    apiUrl = 'http://localhost:3000/users';
    
    constructor(private http: HttpClient){}

    logIn(user: User): Observable<any> {
        return this.http.post<User>(`${this.apiUrl}/auth`, user);
    }

    signUp(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiUrl}`, user);
    }






}