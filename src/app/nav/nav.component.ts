import { Component, OnInit } from '@angular/core';
import { Nav } from './nav.class';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menus: Nav[] = [
    new Nav("Home", "/home"),
    new Nav("Users", "/users"),
    new Nav("Vendors", "/vendors"),
    new Nav("Products", "/products"),
    new Nav("Requests", "/requests")
  ];

  constructor() { }

  ngOnInit(): void {
  }
}