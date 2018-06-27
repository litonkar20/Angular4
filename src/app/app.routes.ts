import { Component } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { VendorNameComponent } from './vendor-name/vendor-name.component';
import { DeviceErrorsComponent } from './device-errors/device-errors.component';
import { DeviceEventComponent } from './device-event/device-event.component';
import { ConnectionLogsComponent } from './connection-logs/connection-logs.component';
import { ConnectionStatusComponent } from './connection-status/connection-status.component';
import { Routes } from "@angular/router";

export  const appRoutes : Routes = [
    { path: '', component: Component },
    { path: 'connection-logs', component: ConnectionLogsComponent },
    { path: 'device-event', component: DeviceEventComponent},
    { path: 'connection-status', component: ConnectionStatusComponent},
    { path: 'device-error', component: DeviceErrorsComponent},
    { path: 'vendor-name', component: VendorNameComponent},
    { path: '**', component: NotFoundComponent }
]