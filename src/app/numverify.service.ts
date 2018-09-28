import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NumverifyService {

  constructor(private http: HttpClient) { }
  
  getDetails(param){
    return this.http.get('http://apilayer.net/api/validate?access_key=8166753344334393009c3dba387a9bc3&number='+param);
  }

}
