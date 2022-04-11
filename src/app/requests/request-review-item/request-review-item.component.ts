import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css'],
})
export class RequestReviewItemComponent implements OnInit {

  request!: Request;

  showConfirmButton: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private rService: RequestService,
  ) { }

  approve() {
    this.rService.approve(this.request).subscribe({
      next: () => {
        console.log('Success!');
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      },
    });

  }

  reject() {
    this.showConfirmButton = !this.showConfirmButton;
  }

  confirmReject() {
    this.showConfirmButton = false;
    this.rService.reject(this.request).subscribe({
      next: () => {
        console.debug('Success');
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  refresh(): void {
    let id = this.route.snapshot.params['id'];
    this.rService.get(id).subscribe({
      next: (res) => {
        console.debug('Request', res);
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnInit(): void {
    this.refresh();
  }

}
