import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { MachineComponent } from './components/machine/machine.component';
import { HomeComponent } from './components/home/home.component';
import { ShiftComponent } from './components/shift/shift.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AddmachComponent } from './components/addmach/addmach.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedserviceService } from './services/sharedservice.service';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { OeeentryoneComponent } from './components/oeeentryone/oeeentryone.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProductoperationsComponent } from './components/productoperations/productoperations.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    MachineComponent,
    HomeComponent,
    ShiftComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SideNavComponent,
    AddmachComponent,
    LoginComponent,
    OeeentryoneComponent,
    ProductoperationsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    SharedserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
