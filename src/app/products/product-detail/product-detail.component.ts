import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendors/vendor.class';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  vendors!: Vendor[];

  showConfirmButton: boolean = false;

  constructor(
    private pService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  remove(): void {
    this.showConfirmButton = !this.showConfirmButton;
  }

  verifyRemove(): void {
    this.pService.remove(this.product.id).subscribe({
      next: () => {
        console.debug('Product deleted');
        this.router.navigateByUrl('/products');
      },
      error: (err) => { console.error(err); },
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.pService.get(id).subscribe({
      next: (res) => {
        console.debug('Product:', res);
        this.product = res;
      },
      error: (err) => { console.error(err); },
    });
  }
}
