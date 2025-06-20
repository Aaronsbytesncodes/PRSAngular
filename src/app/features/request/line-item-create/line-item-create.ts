import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/productservice';
import { LineItemService } from 'src/app/core/services/line-itemservice';
import { Product } from 'src/app/models/productmodel';

@Component({
  selector: 'app-line-item-create',
    standalone: false,
  templateUrl: './line-item-create.html'
})
export class LineItemCreateComponent implements OnInit {
  form!: FormGroup;
  products: Product[] = [];
  requestId!: number;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private productService: ProductService, private lineItemService: LineItemService) {}

  ngOnInit(): void {
    this.requestId = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getAll().subscribe(data => this.products = data);
    this.form = this.fb.group({
      requestID: [this.requestId],
      productID: [''],
      quantity: [1]
    });
  }

  onSubmit(): void {
    this.lineItemService.create(this.form.value).subscribe(() => {
      this.router.navigate(['/requests/lines', this.requestId]);
    });
  }
}

