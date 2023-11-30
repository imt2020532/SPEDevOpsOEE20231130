import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SharedserviceService } from 'src/app/services/sharedservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { DatatranferService } from 'src/app/services/datatranfer.service';

@Component({
  selector: 'app-oeeentryone',
  templateUrl: './oeeentryone.component.html',
  styleUrls: ['./oeeentryone.component.css']
})
export class OeeentryoneComponent {

  minDate: string | undefined;
  maxDate: string | undefined;

  constructor(private service: SharedserviceService, private formBuilder: FormBuilder, private router: Router, private dataservice: DatatranferService ) {

    this.updateDateRange();

  }
  materialsList: any[] = [];
  OEEentry1!: FormGroup;
  dropdownSettings: any = {};

  //materialsList:any[] | undefined;

  ngOnInit(): void {
    this.refreshmaterialsList();
    this.OEEentry1 = this.formBuilder.group({
      Date1: [''],
      Shift1: [''],
      Employee1: [''],
      Materialsid1: [[]]
    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'pkint_Material',
      textField: 'ch_matname',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

products: any[] = [];

  valuesstored() {
    //alert("The OEE entry Form 1 is done!");
    for (let i = 0; i < this.OEEentry1.value.Materialsid1.length; i++) {
      this.products.push(this.OEEentry1.value.Materialsid1[i].pkint_Material);
    }
    console.log(this.OEEentry1.value);
    this.dataservice.products = this.products;
    this.router.navigate(['/productoperations']);
  }
  

  updateDateRange() {
    const currentDate = new Date();
    const maxDate = currentDate.toISOString().split('T')[0]; // Current date as maximum

    const minDate = new Date();
    minDate.setDate(minDate.getDate() - 10); // 10 days ago from current date
    const formattedMinDate = minDate.toISOString().split('T')[0]; // Minimum date as string

    this.minDate = formattedMinDate;
    this.maxDate = maxDate;
  }

  refreshmaterialsList(){

    this.service.getmaterialsList().subscribe(data=>
      {alert('test');
        this.materialsList = data;
      });
    }


}
