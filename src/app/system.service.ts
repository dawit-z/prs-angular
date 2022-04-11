import { Injectable } from '@angular/core';
import { User } from './users/user.class';
import { Router } from '@angular/router';

const testUser = new User();

@Injectable({
  providedIn: 'root',
})

export class SystemService {

  user: User = testUser;

  constructor(
    private router: Router) { }

  getLoggedIn(): User {
    return this.user;
  }

  setLoggedIn(user: User) {
    this.user = user;
  }

  checkLoggedIn() {
    if (this.getLoggedIn() === testUser) {
      this.router.navigateByUrl('/login');
    }
  }
}
