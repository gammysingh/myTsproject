import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  subscribeEmail(body: any) {
    return this.http.post('https://kdvps33228.execute-api.ap-south-1.amazonaws.com/dev/subscribe', body);
  }




}
