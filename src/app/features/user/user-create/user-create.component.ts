import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../model/user.model';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.html',
  standalone: false,
  styleUrls: ['./user-create.css']
})
export class UserCreateComponent {
  form: FormGroup;
 

constructor(
  private fb: FormBuilder,
  private router: Router,
  private userService: UserService
) {
  this.form = this.fb.group({
    username: [''],
    password: [''],
    firstName: [''],
    lastName: [''],
    phoneNumber: [''],
    email: [''],
    reviewer: [false],
    admin: [false]
  });
}

  onSubmit(): void {
    this.userService.create(this.form.value).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
