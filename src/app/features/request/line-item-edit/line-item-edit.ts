import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItemService } from 'src/app/core/services/line-itemservice';
import { LineItem } from 'src/app/models/line-itemmodel';

@Component({
  selector: 'app-line-item-edit',
    standalone: false,
  templateUrl: './line-item-edit.html'
})
export class LineItemEditComponent implements OnInit {
  form!: FormGroup;
  requestId!: number;
  lineItemId!: number;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private lineItemService: LineItemService) {}

  ngOnInit(): void {
    this.requestId = +this.route.snapshot.paramMap.get('id')!;
    this.lineItemId = +this.route.snapshot.paramMap.get('lineItemId')!;
    this.lineItemService.getById(this.lineItemId).subscribe(item => {
      this.form = this.fb.group({ ...item });
    });
  }

  onSubmit(): void {
    this.lineItemService.update(this.form.value).subscribe(() => {
      this.router.navigate(['/requests/lines', this.requestId]);
    });
  }
}

