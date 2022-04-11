import { Injectable } from '@angular/core';
import { User } from './users/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class SystemService {

  user!: any;

  constructor(
    private router: Router) { }

  getLoggedIn(): User {
    return this.user;
  }

  setLoggedIn(user: User) {
    this.user = user;
  }

  checkLoggedIn() {
    if (this.user === null) {
      this.router.navigateByUrl('/login');
    }
  }
}
