import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../../../services/vendorservice';
import { Vendor } from '../../../model/vendormodel';

@Component({
  selector: 'app-vendor-detail',
    standalone: false,
  templateUrl: './vendor-detail.html'
})
export class VendorDetailComponent implements OnInit {
  vendor!: Vendor;

  constructor(
    private vendorService: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.vendorService.getById(id).subscribe(v => this.vendor = v);
  }

  delete(): void {
    if (confirm('Delete this vendor?')) {
      this.vendorService.delete(this.vendor.id).subscribe(() => {
        this.router.navigate(['/vendors']);
      });
    }
  }
}
