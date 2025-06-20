import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';
import { VendorService, Vendor } from 'src/app/core/services/vendor.service';

@Component({
  selector: 'app-product-edit',
    standalone: false,
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit {
  form!: FormGroup;
  vendors: Vendor[] = [];
  id!: number;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private vendorService: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.vendorService.getAll().subscribe(v => this.vendors = v);
    this.productService.getById(this.id).subscribe(product => {
      this.form = this.fb.group({ ...product });
    });
  }

  onSubmit(): void {
    this.productService.update(this.form.value).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
