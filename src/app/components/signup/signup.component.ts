import { UserService } from '../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormResponse } from 'src/app/models/form-response';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formResponse = new FormResponse();
  user = new User();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  signUp() {
    this.userService.addUser(this.user).toPromise()
    .then(res => {
      this.formResponse.setMessage(`Welcome ${this.user.username}, visit you email to check your login credentials.`)
      this.user = new User();
    })
    .catch(err => this.formResponse.setError(err.error))
  }

}
