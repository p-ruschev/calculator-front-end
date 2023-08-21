import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get isLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  get account(): string | null {
    const token = localStorage.getItem('token');

    if (token) {
      const userInfoTokenPart = token.split('.')[1];
      const userInfoString = Buffer.from(userInfoTokenPart, 'base64').toString('ascii')
      const userInfo = JSON.parse(userInfoString);

      return userInfo.email;
    }

    return null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

}
