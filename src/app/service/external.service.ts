import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExternalService {

  constructor(
    private http: HttpClient,
  ) { }
  private options = {
    
  }

  getSpacexInfo(){
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100',this.options)
  
  }

  getlaunchsuccess(params){
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+params,this.options)
  }

  getSpacexYear(params){
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_year='+params,this.options)
  }

  getlanddata(param){
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&land_success='+param,this.options)
  }


  getfilterdata(params){
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100'+params,this.options)
  }
}
