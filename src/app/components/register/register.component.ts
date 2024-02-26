import { Component } from '@angular/core';
import { User } from '../../Models/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  public page_title: string;

  constructor() {
    this.page_title = 'Registro';
  }
}
