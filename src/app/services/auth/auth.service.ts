import { environment } from '../../../environments/environment';
import { LoginForm } from '../../models/login-form';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from 'src/app/models/auth-response';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = environment.API_URL;

  constructor(private http: HttpClient) { }

  authenticate(loginForm: LoginForm) {
    return this.http.post<AuthResponse>(`${this.endpoint}/login`, loginForm)
  }

  saveLoggedUser(authResponse: AuthResponse) {
    localStorage.setItem('token', authResponse.token);
    localStorage.setItem('id', authResponse.id);
    localStorage.setItem('username', authResponse.username);
    localStorage.setItem('fullName', authResponse.fullName);
    localStorage.setItem('role', authResponse.role);
  }

  signOut() {
    localStorage.clear();
  }


   

}
