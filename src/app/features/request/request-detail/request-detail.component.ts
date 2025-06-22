import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../../services/request-service';
import { Request } from '../../../model/requestmodel';

@Component({
  selector: 'app-request-detail',
    standalone: false,
  templateUrl: './request-detail.html'
})
export class RequestDetailComponent implements OnInit {
  request!: Request;

  constructor(private requestService: RequestService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.requestService.getById(id).subscribe(data => this.request = data);
  }

  delete(): void {
    if (confirm('Delete request?')) {
      this.requestService.delete(this.request.id).subscribe(() => {
        this.router.navigate(['/requests']);
      });
    }
  }
}

