import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendors/vendor.class';
import { VendorService } from 'src/app/vendors/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product!: Product;
  vendors!: Vendor[];

  constructor(
    private pService: ProductService,
    private vService: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  update(): void {
    this.pService.update(this.product).subscribe({
      next: () => {
        console.debug("Product Updated!")
        this.router.navigateByUrl("/products");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }


  ngOnInit(): void {
    this.vService.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.vendors = res;
      },
      error: (err) => { console.error(err); }
    });
    let id = +this.route.snapshot.params["id"];
    this.pService.get(id).subscribe({
      next: (res) => {
        console.debug("Product:", res)
        this.product = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
