import { Component, OnDestroy, OnInit } from '@angular/core';
import { VendorService } from 'src/app/core/services/vendorservice';
import { Vendor } from 'src/app/models/vendormodel';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.html',
  
})
export class VendorListComponent implements OnInit, OnDestroy {
  vendors: Vendor[] = [];
  subscription: Subscription = new Subscription();

  constructor(private vendorService: VendorService, private router: Router) {}

  ngOnInit(): void {
    const sub = this.vendorService.getAll().subscribe(v => this.vendors = v);
    this.subscription.add(sub);
  }

  deleteVendor(id: number): void {
    if (confirm('Delete this vendor?')) {
      const sub = this.vendorService.delete(id).subscribe(() => this.ngOnInit());
      this.subscription.add(sub);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}