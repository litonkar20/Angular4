import { HttpRequestService } from './../shared/services/http-request.service';
import { Component } from '@angular/core';

@Component({
  selector: 'connection-logs',
  templateUrl: './connection-logs.component.html',
  styleUrls: ['./connection-logs.component.css']
})
export class ConnectionLogsComponent {
  model : Array<any> = [];
  constructor ( private http: HttpRequestService) {};

  getConnectionLogs() {
    console.log(this.model)
    this.http.getDeviceConnectionLogs(this.model).subscribe(Response => {
      console.log(Response);
    }, error => {
      console.log(error)
    })
  }

}
