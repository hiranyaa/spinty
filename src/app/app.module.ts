import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CommonComponentsModule } from './common-components/common-components.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { AddSprintFormComponent } from './sprints/add-sprint-form/add-sprint-form.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AddSprintFormComponent,
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
