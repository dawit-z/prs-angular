import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/users/user.class';
import { UserService } from 'src/app/users/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css'],
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();

  constructor(
    private rService: RequestService,
    private router: Router,
    private sService: SystemService,
  ) { }

  ngOnInit(): void {
  }

  save(): void {
    this.request.userId = this.sService.getLoggedIn().id;
    this.rService.create(this.request).subscribe({
      next: () => {
        console.debug('Request added');
        this.router.navigateByUrl('/requests');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
