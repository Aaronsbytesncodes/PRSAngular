import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from 'src/app/core/services/vendor';
import { Vendor } from 'src/app/models/vendor';

@Component({
  selector: 'app-vendor-edit',
    standalone: false,
  templateUrl: './vendor-edit.html'
})
export class VendorEditComponent implements OnInit {
  form!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private vendorService: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.vendorService.getById(this.id).subscribe(vendor => {
      this.form = this.fb.group({ ...vendor });
    });
  }

  onSubmit(): void {
    this.vendorService.update(this.form.value).subscribe(() => {
      this.router.navigate(['/vendors']);
    });
  }
}
