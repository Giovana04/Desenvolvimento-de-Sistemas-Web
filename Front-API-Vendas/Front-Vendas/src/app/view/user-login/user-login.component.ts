import { Component } from '@angular/core';
import User from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private userService: UserService, private authService: AuthService) {
    this.login();
  }
  login(): void {
    const user = new User();
    user.email = "hihi@mail.com"
    user.password = "1234567";
    this.userService.createSession(user).subscribe({
      next: (res) => {
        console.log("Login successful", res);
        this.authService.mockUserLogin(res);
      }, error: (err) => {
        console.error("Login failed", err);
      }
    })
  }
}
