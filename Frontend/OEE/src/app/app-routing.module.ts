import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MachineComponent } from './components/machine/machine.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddmachComponent } from './components/addmach/addmach.component';
import { OeeentryoneComponent } from './components/oeeentryone/oeeentryone.component';
import { ProductoperationsComponent } from './components/productoperations/productoperations.component';

const routes: Routes = [
  
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'Machine',
    component: MachineComponent
  },
  {
    path:'addmach',
    component: AddmachComponent
  },
  {
    path:'employee',
    component: EmployeeComponent
  },
  {
    path:'oeeentryone',
    component: OeeentryoneComponent
  },
  {
    path:'productoperations',
    component: ProductoperationsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }