import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/userservice'; 
import { User } from '../../../model/usermodel';
@Component({
  selector: 'app-user-create',
    standalone: false,
  templateUrl: './user-create.html'
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
