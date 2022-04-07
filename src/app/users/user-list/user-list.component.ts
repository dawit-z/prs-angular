import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[];

  constructor(
    private uService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.uService.list().subscribe({
      next: (res) => {
        console.log("Users:", res)
        this.users = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
