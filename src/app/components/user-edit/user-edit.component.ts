import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { User } from '../../Models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
  providers: [UserService],
})
export class UserEditComponent {
  public page_title: string;
  public user: User;
  public status: string;
  public identity: any;
  public token: string;

  constructor(private _userService: UserService) {
    this.page_title = 'Registro';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = new User(1, '', '', '', '', 'ROLE_USER', '');
    this.status = '';
  }

  onSubmit(form: any) {
    console.log(form);
  }
}
