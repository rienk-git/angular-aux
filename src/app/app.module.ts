import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {PortalModule} from '@angular/cdk/portal';
import { SideRouteComponent } from './components/side-route/side-route.component';

@NgModule({
  declarations: [
    AppComponent,
    SideRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
