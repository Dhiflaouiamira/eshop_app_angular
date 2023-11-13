import { AuthService } from '../../services/auth/auth.service';
import { FormResponse } from '../../models/form-response';
import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/models/login-form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new LoginForm();
  formResponse = new FormResponse();
  errorMsg = ""

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  
  }

  login() {
    this.authService.authenticate(this.loginForm).toPromise()
      .then(res => {
        this.authService.saveLoggedUser(res);
        this.errorMsg = "";
        const role = localStorage.getItem("role");
        if (role === "admin") {
          this.router.navigate(['/dashboard']);
        
        } else {
          this.router.navigate(["myspace"]);
        }
      })
      .catch(err => {
        if (err.status === 401 && err.error && err.error.message === "Agent login failed") {
          this.errorMsg = "Agent login failed. Please check your username and password.";
        } else {
          this.errorMsg = "An error occurred. Please try again later.";
        }
      });
  }
  
  

}
