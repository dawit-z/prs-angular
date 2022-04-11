import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/products/product.class';
import { ProductService } from 'src/app/products/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css'],
})
export class RequestlineCreateComponent implements OnInit {

  line: Requestline = new Requestline();

  products!: Product[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pService: ProductService,
    private lService: RequestlineService,
  ) { }


  save(): void {
    this.lService.create(this.line).subscribe({
      next: () => {
        console.log('Success!');
        this.router.navigateByUrl(`request/lines/${this.line.requestId}`);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnInit(): void {
    this.line.requestId = +this.route.snapshot.params['id'];
    this.pService.list().subscribe({
      next: (res) => {
        console.log('Products:', res);
        this.products = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

}
