import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/core/services/requestservice';
import { Request } from '../models/requestmodel';

@Component({
  selector: 'app-request-detail',
    standalone: false,
  templateUrl: './request-detail.html'
})
export class RequestDetailComponent implements OnInit {
  request!: Request;

  constructor(private service: RequestService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.getById(id).subscribe(data => this.request = data);
  }

  delete(): void {
    if (confirm('Delete request?')) {
      this.service.delete(this.request.id).subscribe(() => {
        this.router.navigate(['/requests']);
      });
    }
  }
}

