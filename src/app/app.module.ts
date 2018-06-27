import { RouterModule } from '@angular/router';
import { HttpRequestService } from './shared/services/http-request.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConnectionLogsComponent } from './connection-logs/connection-logs.component';
import { DeviceEventComponent } from './device-event/device-event.component';
import { DeviceErrorsComponent } from './device-errors/device-errors.component';
import { ConnectionStatusComponent } from './connection-status/connection-status.component';
import { VendorNameComponent } from './vendor-name/vendor-name.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    ConnectionLogsComponent,
    DeviceEventComponent,
    DeviceErrorsComponent,
    ConnectionStatusComponent,
    VendorNameComponent,
    NotFoundComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: Component },
      { path: 'connection-logs', component: ConnectionLogsComponent },
    ])
  ],
  providers: [
    HttpRequestService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
