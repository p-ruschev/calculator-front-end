import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = `${environment.apiUrl + '/auth'}`

  constructor(private http: HttpClient) { }

  auth(email: string, password: string, action: string): Observable<User> {
    return this.http.post<User>(this.url + '/' + action, { email, password });
  }

}
