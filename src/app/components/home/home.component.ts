import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [UserService],
})
export class HomeComponent {
  public page_title: string;
  public identity: any;

  constructor(private _userService: UserService) {
    this.page_title = 'Inicio';
    this.identity = this._userService.getIdentity();
  }
}
