import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { global } from './global';

@Injectable()
export class UserService {
  public url: string;
  public identity: any;
  public token: string;

  constructor(public _http: HttpClient) {
    this.url = global.url;
    this.token = '';
  }

  prueba() {
    return 'Hola mundo desde el UserService';
  }

  register(user: any): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json=' + json;

    let headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    return this._http.post(this.url + 'register', params, { headers: headers });
  }

  signup(user: any, gettoken = false): Observable<any> {
    if (gettoken != false) user.gettoken = 'true';

    let json = JSON.stringify(user);
    let params = 'json=' + json;

    let headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    return this._http.post(this.url + 'login', params, { headers: headers });
  }

  getIdentity() {
    let identity = localStorage.getItem('identity');
    if (this.identity !== null && identity !== null) {
      this.identity = JSON.parse(identity);
    }

    return this.identity;
  }

  getToken() {
    if (this.token !== '') {
      let token = localStorage.getItem('token');
      if (token && token != '') {
        this.token = token;
      }
    }

    return this.token;
  }
}
