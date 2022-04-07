import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor!: Vendor;
  showConfirmButton: boolean = false;

  constructor(
    private vService: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void {
    this.showConfirmButton = !this.showConfirmButton;
  }
  verifyRemove(): void {
    this.vService.remove(this.vendor.id).subscribe({
      next: () => {
        console.debug("Vendor deleted");
        this.router.navigateByUrl("/vendors");
      },
      error: (err) => { console.error(err); }
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.vService.get(id).subscribe({
      next: (res) => {
        console.debug("Vendor:", res);
        this.vendor = res;
      },
      error: (err) => { console.error(err); }
    });
  }
}
