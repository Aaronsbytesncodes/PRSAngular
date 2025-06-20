import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/userservice';

@Component({
  selector: 'app-user-edit',
    standalone: false,
  templateUrl: './user-edit.html'
})
export class UserEditComponent implements OnInit {
  form!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getById(this.id).subscribe(user => {
      this.form = this.fb.group({ ...user });
    });
  }

  onSubmit(): void {
    this.userService.update(this.form.value).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
