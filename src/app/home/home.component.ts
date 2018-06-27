import { HttpRequestService } from './../shared/services/http-request.service';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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

