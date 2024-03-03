import { Component, DoCheck } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../Models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UserService],
})
export class LoginComponent implements DoCheck {
  public page_title: string;
  public user: User;
  public identity: any;
  public token: string;
  public status: string;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.page_title = 'Identificate';
    this.user = new User(1, '', '', '', '', 'ROLE_USER', '');
    this.status = '';
    this.token = '';
  }

  ngDoCheck(): void {
    this.logout();
  }

  onSubmit(form: any) {
    this._userService.signup(this.user).subscribe({
      next: (response: any) => {
        if (!response.status || response.status != 'error') {
          this.status = 'success';
          this.identity = response;

          this._userService.signup(this.user, true).subscribe({
            next: (response: any) => {
              if (!response.status || response.status != 'error') {
                this.token = response;

                //console.log(this.identity);
                //console.log(this.token);

                localStorage.setItem('token', this.token);
                localStorage.setItem('identity', JSON.stringify(this.identity));

                this._router.navigate(['/inicio']);
              }
            },
            error(err: any) {
              console.log(err);
            },
          });
        } else {
          this.status = 'error';
        }
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  logout() {
    this._route.params.subscribe({
      next: (params: any) => {
        let sure = +params['sure'];

        if (sure == 1) {
          localStorage.removeItem('identity');
          localStorage.removeItem('token');

          this.identity = null;
          this.token = '';

          this._router.navigate(['/inicio']);
        }
      },
    });
  }
}
