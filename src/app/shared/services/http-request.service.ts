import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  public baseUrl: string = environment.baseUrl;
  public endPoints: any = environment.endPoints;

  constructor(private http: HttpClient) { }

  getDeviceConnectionLogs(params) {
    return this.http.get(this.baseUrl + this.endPoints.connectionLogs, { params })
  }
}
