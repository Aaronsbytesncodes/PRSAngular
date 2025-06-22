import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Inject } from '@angular/core';
import { User } from '../model/user.model';

import { inject } from '@angular/core';

@Component({
  selector: 'app-user-edit',
    standalone: false,
  templateUrl: './user-edit.html',
 
})
export class UserEditComponent implements OnInit {
  form!: FormGroup;
  id!: number;

  constructor(
    @Inject(UserService) 
  
    private userService: UserService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getById(this.id).subscribe((user: User) => {
      this.form = this.fb.group({ ...user });
    });
    }
  

  onSubmit(): void {
    this.userService.update(this.form.value).subscribe(() => {
      this.router.navigate(['/users']);
    })
  }
}
