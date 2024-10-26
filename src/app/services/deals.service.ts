import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../appconstants/appConstants';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor(private _http: HttpClient) { }

  createDeals(leadDetails: any){
    return this._http.post<any>(AppConstants.POST_CREATE_DEAL(), leadDetails);
  }

  getDeals(){
    return this._http.get<any>(AppConstants.GET_ALL_Deals());
  }
}
