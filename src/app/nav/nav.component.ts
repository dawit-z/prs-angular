import { Component, OnInit } from '@angular/core';
import { Nav } from './nav.class';
import { SystemService } from '../system.service';
import { User } from '../users/user.class';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  user: User = new User();

  menus: Nav[] = [
    new Nav('Home', '/home'),
    new Nav('Users', '/users'),
    new Nav('Vendors', '/vendors'),
    new Nav('Products', '/products'),
    new Nav('Requests', '/requests'),
    new Nav('Reviews', '/request/reviews'),
    new Nav('About', '/about'),
  ];

  constructor(
    private sService: SystemService,
  ) { }

  ngOnInit(): void {
    this.user = this.sService.getLoggedIn();
  }
}
