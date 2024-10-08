import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../appconstants/appConstants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  doLogin(user: any){
    return this._http.post<any>(AppConstants.POST_DO_LOGIN(), user);
  }

}
