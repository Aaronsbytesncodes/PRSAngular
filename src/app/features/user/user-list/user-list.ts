import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/userservice';
import { User } from '../../../model/usermodel';

@Component({
  selector: 'app-user-list',
    standalone: false,
  templateUrl: './user-list.html'
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAll().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.delete(id).subscribe(() => this.loadUsers());
    }
  }
}