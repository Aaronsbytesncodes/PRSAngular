import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src\app\services\userservice';
@Component({
  selector: 'app-user-detail',
    standalone: false,
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
 

  constructor(
    private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getById(id).subscribe(user => this.user = user);
  }

  deleteUser(): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.delete(this.user.id).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
  }
}
