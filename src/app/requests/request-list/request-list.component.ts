import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests!: Request[];

  constructor(private rService: RequestService) { }

  ngOnInit(): void {
    this.rService.list().subscribe({
      next: (res) => {
        console.debug("Requests:", res);
        this.requests = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
