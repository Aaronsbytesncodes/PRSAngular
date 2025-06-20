import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/productservice';
import { VendorService } from '../../../services/vendorservice';
import { Vendor } from '../../../model/vendormodel';

@Component({
  selector: 'app-product-create',
    standalone: false,
  templateUrl: './product-create.html'
  
})
export class ProductCreateComponent implements OnInit {
  form!: FormGroup;
  vendors: Vendor[] = [];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private vendorService: VendorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.vendorService.getAll().subscribe(v => this.vendors = v);
    this.form = this.fb.group({
      vendorID: [''],
      partNumber: [''],
      name: [''],
      price: [0],
      unit: [''],
      photoPath: ['']
    });
  }

  onSubmit(): void {
    this.productService.create(this.form.value).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
