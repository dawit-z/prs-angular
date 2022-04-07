import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendors/vendor.class';
import { VendorService } from 'src/app/vendors/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors!: Vendor[];

  constructor(
    private pService: ProductService,
    private router: Router,
    private vService: VendorService
  ) { }

  ngOnInit(): void {
    this.vService.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.vendors = res;
      }
    });
  }

  save(): void {
    this.pService.create(this.product).subscribe({
      next: () => {
        console.debug("Product added");
        this.router.navigateByUrl("/products");
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


}
