import { Injectable } from '@angular/core';

import { of } from 'rxjs';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  notifier = of(this.isLoggedIn);

  login(): void {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}