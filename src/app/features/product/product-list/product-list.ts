import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from 'src/app/core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
    standalone: false,
  templateUrl: './product-list.html'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(p => this.products = p);
  }

  deleteProduct(id: number): void {
    if (confirm('Delete this product?')) {
      this.productService.delete(id).subscribe(() => this.ngOnInit());
    }
  }
}