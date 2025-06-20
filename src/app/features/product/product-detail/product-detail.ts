import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductService } from 'src/app/core/services/product';

@Component({
  selector: 'app-product-detail',
    standalone: false,
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  product!: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getById(id).subscribe(p => this.product = p);
  }

  deleteProduct(): void {
    if (confirm('Delete this product?')) {
      this.productService.delete(this.product.id).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }
}
