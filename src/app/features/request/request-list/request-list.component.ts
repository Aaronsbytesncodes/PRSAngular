import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../services/request-service';
import { Request } from '../../../model/requestmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-list',
    standalone: false,
  templateUrl: './request-list.html'
})
export class RequestListComponent implements OnInit {
  requests: Request[] = [];

  constructor(private requestService: RequestService, private router: Router) {}

  ngOnInit(): void {
    this.requestService.getAll().subscribe(data => this.requests = data);
  }
}

