import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(
    private uService: UserService,
    private router: Router) { }

  submit() {
    this.uService.login(this.username, this.password).subscribe({
      next: (res) => {
        console.log("Success!");
        this.router.navigateByUrl("/home")
      },
      error: (err) => {
        console.log("Failed!", err);
        alert("Not Found");
      }
    })
  }

  ngOnInit(): void {
  }

}
