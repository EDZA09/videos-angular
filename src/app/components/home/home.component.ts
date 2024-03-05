import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {
  public page_title: string;
  public identity: any;
  public token: string;

  constructor(private _userService: UserService) {
    this.page_title = 'Inicio';
    this.token = '';
  }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
}
