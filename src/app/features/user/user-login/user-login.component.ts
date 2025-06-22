import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserLoginDTO } from '../../../model/user-login-dto';
import { User } from '../../../model/usermodel';
import { UserService } from '../../../services/user-service';

@Component({
  selector: 'app-user-login',
  standalone: false,
  templateUrl: './user-login.html',
  styleUrl: './user-login.css'
})
export class UserLogin implements OnInit, OnDestroy {
  title: string = 'User-Login';
  userLoginDTO: UserLoginDTO = new UserLoginDTO();
  subscription!: Subscription;
  user!: User;
  message: string = '';

  constructor(
    private userSvc: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // for testing purposes - remove once ready for primetime
    this.userLoginDTO.email = 'hgilmore@happy.com';
    this.userLoginDTO.password = 'hockey';
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  login() {
    console.log("UserLogin", this.userLoginDTO);
    this.subscription = this.userSvc.login(this.userLoginDTO.email, this.userLoginDTO.password).subscribe({
      next: (resp: User) => {
        // successful login
        // You can add logic here to store the user if needed
        this.router.navigateByUrl('/users');
      },
      error: (err: any) => {
        // unsuccessful login
        this.message = 'Invalid login - bad email/pwd combo';
      },
    });
  }
}
