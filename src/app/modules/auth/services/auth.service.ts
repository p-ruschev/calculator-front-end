import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = 'http://localhost:8000/auth'

  constructor(private http: HttpClient) { }

  auth(email: string, password: string, action: string): Observable<User> {
    return this.http.post<User>( this.url + '/' + action, {email, password});
  }

}
