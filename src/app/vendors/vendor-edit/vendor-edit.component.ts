import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css'],
})
export class VendorEditComponent implements OnInit {

  vendor!: Vendor;

  constructor(
    private vService: VendorService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  update(): void {
    this.vService.update(this.vendor).subscribe({
      next: () => {
        console.debug('Vendor Updated!');
        this.router.navigateByUrl('/vendors');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.vService.get(id).subscribe({
      next: (res) => {
        console.debug('Vendor:', res);
        this.vendor = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
