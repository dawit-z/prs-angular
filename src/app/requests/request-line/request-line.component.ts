import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from 'src/app/requestlines/requestline.class';
import { RequestlineService } from 'src/app/requestlines/requestline.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-line',
  templateUrl: './request-line.component.html',
  styleUrls: ['./request-line.component.css']
})
export class RequestLineComponent implements OnInit {

  request!: Request;
  requestlines!: Requestline[];

  constructor(
    private rService: RequestService,
    private rlService: RequestlineService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.rService.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res)
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
