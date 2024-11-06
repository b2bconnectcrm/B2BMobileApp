import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../appconstants/appConstants';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  constructor(private _http: HttpClient) { }

  createLeads(Details: any){
    return this._http.post<any>(AppConstants.POST_CREATE_Lead(), Details);
  }

  getLeads(){
    return this._http.get<any>(AppConstants.GET_ALL_Leads());
  }
  getLeadsById(id:any){
    return this._http.get<any>(AppConstants.GET_ALL_Leads_By_Id(id));
  }
}
