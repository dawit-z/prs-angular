import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();

  constructor(
    private vService: VendorService,
    private router: Router) { }

  save(): void {
    this.vService.create(this.vendor).subscribe({
      next: () => {
        console.debug("Vendor added");
        this.router.navigateByUrl("/vendors")
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  ngOnInit(): void {
  }

}
