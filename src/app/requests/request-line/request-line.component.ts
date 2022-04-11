import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from 'src/app/requestlines/requestline.class';
import { RequestlineService } from 'src/app/requestlines/requestline.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-line',
  templateUrl: './request-line.component.html',
  styleUrls: ['./request-line.component.css'],
})
export class RequestLineComponent implements OnInit {

  request!: Request;

  constructor(
    private rService: RequestService,
    private lService: RequestlineService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  review() {
    this.rService.review(this.request).subscribe({
      next: () => {
        console.debug('Reviewed');
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  edit(line: Requestline) {
    this.router.navigateByUrl(`/requestline/edit/${line.id}`);
  }

  remove(line: Requestline) {
    this.lService.remove(line.id).subscribe({
      next: () => {
        console.log('Success!');
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
        console.log('Request', res);
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
