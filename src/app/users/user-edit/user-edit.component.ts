import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {

  user!: User;

  constructor(
    private uService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  update(): void {
    this.uService.update(this.user).subscribe({
      next: () => {
        console.debug('User Updated!');
        this.router.navigateByUrl('/users');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.uService.get(id).subscribe({
      next: (res) => {
        console.debug('User:', res);
        this.user = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
