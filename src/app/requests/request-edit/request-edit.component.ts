import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/users/user.class';
import { UserService } from 'src/app/users/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css'],
})
export class RequestEditComponent implements OnInit {

  request!: Request;

  users!: User[];

  constructor(
    private rService: RequestService,
    private uService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  update(): void {
    this.rService.update(this.request).subscribe({
      next: () => {
        console.debug('Request Updated!');
        this.router.navigateByUrl('/requests');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }


  ngOnInit(): void {
    this.uService.list().subscribe({
      next: (res) => {
        console.debug('Users:', res);
        this.users = res;
      },
      error: (err) => { console.error(err); },
    });
    let id = +this.route.snapshot.params['id'];
    this.rService.get(id).subscribe({
      next: (res) => {
        console.debug('Request:', res);
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

}
