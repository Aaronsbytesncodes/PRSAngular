import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '..\services\user';

@Component({
  selector: 'app-user-list',
    standalone: false,
  templateUrl: './user-list.html'
})
export class UserListComponent implements OnInit {


 

  constructor() {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.UserService.getAll().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.UserService.delete(id).subscribe(() => this.loadUsers());
    }
  }
}