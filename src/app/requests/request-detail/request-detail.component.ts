import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/users/user.class';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request!: Request;
  users!: User[];
  showConfirmButton: boolean = false;

  constructor(
    private rService: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  remove(): void {
    this.showConfirmButton = !this.showConfirmButton;
  }
  verifyRemove(): void {
    this.rService.remove(this.request.id).subscribe({
      next: () => {
        console.debug("Request deleted");
        this.router.navigateByUrl("/requests");
      },
      error: (err) => { console.error(err); }
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.rService.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.request = res;
      },
      error: (err) => { console.error(err); }
    });
  }

}
