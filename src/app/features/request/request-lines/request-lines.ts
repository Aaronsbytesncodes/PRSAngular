import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src\app\services\requestservice.ts';
import { LineItemService } from 'src\app\services\line-itemservice.ts';
import { Request } from 'src/app/models/requestmodel';
import { LineItem } from 'src/app/models/line-itemmodel';


@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.html',
  styleUrls: ['./request-lines.css']
})

export class RequestLinesComponent implements OnInit {
  request!: Request;
  lineItems: LineItem[] = [];
  id!: number;

  constructor(private route: ActivatedRoute, private requestService: RequestService, private lineItemService: LineItemService, private router: Router) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.refresh();
  }

  refresh(): void {
    this.requestService.getById(this.id).subscribe(r => this.request = r);
    this.lineItemService.getForRequest(this.id).subscribe(items => this.lineItems = items);
  }

  deleteLineItem(id: number): void {
    if (confirm('Delete line item?')) {
      this.lineItemService.delete(id).subscribe(() => this.refresh());
    }
  }
}
