import { Injectable } from '@angular/core';
import User from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  mockUserLogin(data: {user: string, token: string}): void {
    const {user, token} = data;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  }

  getUser(): User{
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        return JSON.parse(userData) as User;
      } catch (error) {
        console.error('Invalid user data in localStorage:', error);
      }
    }
    return new User();
  }

  getToken(): string{
    return localStorage.getItem('token') || '';
  }
}
