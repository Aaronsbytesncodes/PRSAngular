import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/core/services/requestservice';
import { Request } from 'src/app/models/requestmodel';
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

