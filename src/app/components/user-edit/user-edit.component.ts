import { Component } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent {
  public page_title: string;
  constructor() {
    this.page_title = 'Ajustes de Usuario';
  }
}
