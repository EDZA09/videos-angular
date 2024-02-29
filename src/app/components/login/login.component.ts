import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

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
export class LoginComponent {
  public page_title: string;
  public user: User;
  public status: string;

  constructor(private _userService: UserService) {
    this.page_title = 'Identificate';
    this.user = new User(1, '', '', '', '', 'ROLE_USER', '');
    this.status = '';
  }

  onSubmit(form: any) {}
}
