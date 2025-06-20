import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VendorService } from 'src/app/core/services/vendor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
    standalone: false,
  templateUrl: './vendor-create.html'
})
export class VendorCreateComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private vendorService: VendorService, private router: Router) {
    this.form = this.fb.group({
      code: [''],
      name: [''],
      address: [''],
      city: [''],
      state: [''],
      zip: [''],
      phoneNumber: [''],
      email: ['']
    });
  }

  onSubmit(): void {
    this.vendorService.create(this.form.value).subscribe(() => {
      this.router.navigate(['/vendors']);
    });
  }
}

