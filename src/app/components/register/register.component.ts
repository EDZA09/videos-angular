import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { User } from '../../Models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [UserService],
})
export class RegisterComponent {
  public page_title: string;
  public user: User;
  public status: string;

  constructor(private _userService: UserService) {
    this.page_title = 'Registro';
    this.user = new User(1, '', '', '', '', 'ROLE_USER', '');
    this.status = '';
  }

  onSubmit(form: any) {
    this._userService.register(this.user).subscribe({
      next: (response: any) => {
        if (response.status == 'success') {
          this.status = 'success';
          form.reset();
        } else {
          this.status = 'error';
        }
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
