import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/services/request.service';

@Component({
  selector: 'app-request-create',
    standalone: false,
  templateUrl: './request-create.html'
})
export class RequestCreateComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private requestService: RequestService, private router: Router) {
    this.form = this.fb.group({
      userID: [1], // Or dynamically set based on logged-in user
      description: [''],
      justification: [''],
      dateNeeded: [''],
      deliveryMode: ['Pickup'],
      status: ['NEW'],
      total: [0]
    });
  }

  onSubmit(): void {
    this.requestService.create(this.form.value).subscribe(newReq => {
      this.router.navigate(['/requests/lines', newReq.id]);
    });
  }
}
