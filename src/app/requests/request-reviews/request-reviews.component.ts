import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-reviews',
  templateUrl: './request-reviews.component.html',
  styleUrls: ['./request-reviews.component.css'],
})
export class RequestReviewsComponent implements OnInit {

  requests!: Request[];

  constructor(
    private sService: SystemService,
    private rService: RequestService,
  ) { }

  ngOnInit(): void {
    this.sService.checkLoggedIn();
    let id = this.sService.getLoggedIn().id;
    this.rService.reviews(id).subscribe({
      next: (res) => {
        console.log('Requests in Review', res);
        this.requests = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

}
