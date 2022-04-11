import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {

  user: User = new User();

  constructor(
    private uService: UserService,
    private router: Router) { }

  save(): void {
    this.uService.create(this.user).subscribe({
      next: () => {
        console.debug('User added');
        this.router.navigateByUrl('/users');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnInit(): void {
  }

}
