import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../../services/request-service';
import { LineItemService } from '../../../services/line-item-service';
import { Request } from '../../../model/requestmodel';
import { LineItem } from '../../../model/line-itemmodel';
import { UserService } from '../../../services/user-service';


@Component({
  selector: 'app-request-lines',
  standalone: false,
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
    this.requestService.getById(this.id).subscribe((r: Request) => this.request = r);
    this.lineItemService.getForRequest(this.id).subscribe((items: LineItem[]) => this.lineItems = items);
  }

  deleteLineItem(id: number): void {
    if (confirm('Delete line item?')) {
      this.lineItemService.delete(id).subscribe(() => this.refresh());
    }
  }
}
