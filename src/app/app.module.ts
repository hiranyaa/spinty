import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CommonComponentsModule } from './common-components/common-components.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonComponentsModule,
    AdminLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
