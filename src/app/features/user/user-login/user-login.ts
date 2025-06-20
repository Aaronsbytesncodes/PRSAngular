import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserLoginDTO } from '../../../model/user-login-dto';
import { User } from '../../../model/usermodel';
import { UserService } from '../../../services/userservice';
import { SystemService } from '../services/systemservice';

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
    private router: Router,
    // Use @Inject if SystemService is provided via a string or InjectionToken
    // @Inject(SystemService) private sysSvc: SystemService
    private sysSvc: SystemService
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
      next: (resp) => {
        // successful login
        this.sysSvc.loggedInUser = resp;
        // nav to user list (update route as needed)
        this.router.navigateByUrl('/users');
      },
      error: (err) => {
        // unsuccessful login
        this.message = 'Invalid login - bad email/pwd combo';
      },
    });
  }
}
