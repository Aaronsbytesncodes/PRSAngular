import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/userservice';
import { User } from '../../../model/usermodel';

@Component({
  selector: 'app-user-detail',
  standalone: false,
  templateUrl: './user-detail.html'
})
export class UserDetailComponent implements OnInit {
  user!: User;

  constructor(
    private userService: UserService,
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
