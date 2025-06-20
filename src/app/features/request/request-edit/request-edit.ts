import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../../services/requestservice';

@Component({
  selector: 'app-request-edit',
    standalone: false,
  templateUrl: './request-edit.html'
})
export class RequestEditComponent implements OnInit {
  form!: FormGroup;
  id!: number;

  constructor(private fb: FormBuilder, private requestService: RequestService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.requestService.getById(this.id).subscribe(request => {
      this.form = this.fb.group({ ...request });
    });
  }

  onSubmit(): void {
    this.requestService.update(this.form.value).subscribe(() => {
      this.router.navigate(['/requests']);
    });
  }
}
