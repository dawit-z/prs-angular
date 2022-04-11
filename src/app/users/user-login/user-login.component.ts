import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {

  username: string = '';

  password: string = '';

  constructor(
    private sService: SystemService,
    private uService: UserService,
    private router: Router) { }

  submit() {
    this.uService.login(this.username, this.password).subscribe({
      next: (res) => {
        console.log('Success!');
        this.sService.setLoggedIn(res);
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        console.log('Failed!', err);
        alert('User Not Found');
      },
    });
  }

  ngOnInit(): void {
  }

}
