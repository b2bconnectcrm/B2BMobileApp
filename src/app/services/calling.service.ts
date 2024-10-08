import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../appconstants/appConstants';

@Injectable({
  providedIn: 'root'
})
export class CallingService {

  constructor(private _http: HttpClient) { }

  createLeadDetails(leadDetails: any){
    return this._http.post<any>(AppConstants.POST_CREATE_LEAD_DETAILS(), leadDetails);
  }

  getAllPropeties(){
    return this._http.get<any>(AppConstants.GET_ALL_PROPERTY_DETAILS());
  }
}
