import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'tsys-login-out',
  templateUrl: './login-out.component.html',
  styleUrls: ['./login-out.component.css']
})
export class LoginOutComponent implements OnInit {
  ngOnInit(): void {}

  constructor( private authService: AuthService, private http: HttpService ) {}

  login() {
    this.http.login('Logging in').subscribe((res) => {
      this.authService.isLoggedIn = (res.toString() == 'true')
    });
  }
}
