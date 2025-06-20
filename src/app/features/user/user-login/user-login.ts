import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  standalone: false,
  templateUrl: './user-login.html',
  styleUrl: './user-login.css'
})
export class UserLogin {export class UserLogin implements OnInit, OnDestroy {
  title: string = 'User-Login';
  userLoginDTO: UserLoginDTO = new UserLoginDTO();
  subscription!: Subscription;
  user!: User;
  message: string = '';

  constructor(private userSvc: UserService, private router: Router,
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
    this.subscription = this.userSvc.login(this.userLoginDTO).subscribe({
      next: (resp) => {
        // successful login
        this.sysSvc.loggedInUser = resp;
        // nav to movie-list
        this.router.navigateByUrl('/movie-list');
      },
      error: (err) => {
        // unsuccessful login
        this.message = 'Invalid login - bad email/pwd combo';
      },
    });
  }
}

}
