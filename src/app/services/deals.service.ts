import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../appconstants/appConstants';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor(private _http: HttpClient) { }

  createDeals(Details: any){
    return this._http.post<any>(AppConstants.POST_CREATE_DEAL(), Details);
  }

  getDeals(){
    return this._http.get<any>(AppConstants.GET_ALL_Deals());
  }
  getDealsById(id:any){
    return this._http.get<any>(AppConstants.GET_ALL_Deals_By_Id(id));
  }
  updateDeals(ID:any,Details: any){
    return this._http.put<any>(AppConstants.PUT_UPDATE_DEAL(ID), Details);
  }
  deleteDeals(id:any){
    return this._http.delete<any>(AppConstants.delete_deals(id));
  }
}
