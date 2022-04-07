import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/users/user.class';
import { UserService } from 'src/app/users/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  users!: User[]

  constructor(
    private rService: RequestService,
    private router: Router,
    private uService: UserService
  ) { }

  ngOnInit(): void {
    this.uService.list().subscribe({
      next: (res) => {
        console.debug("Users:", res);
        this.users = res;
      }
    });
  }

  save(): void {
    this.rService.create(this.request).subscribe({
      next: () => {
        console.debug("Request added");
        this.router.navigateByUrl("/requests");
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
