import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { User } from '../../Models/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  public page_title: string;
  public user: User;

  constructor() {
    this.page_title = 'Registro';
    this.user = new User(1, '', '', '', '', 'ROLE_USER', '');
  }

  onSubmit(formValue: any) {
    console.log(formValue);
  }
}
