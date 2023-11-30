import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SharedserviceService } from 'src/app/services/sharedservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { DatatranferService } from 'src/app/services/datatranfer.service';

@Component({
  selector: 'app-productoperations',
  templateUrl: './productoperations.component.html',
  styleUrls: ['./productoperations.component.css']
})
export class ProductoperationsComponent {

  productops: any[] = []; 

  
 materialOps: any = [];

  constructor(private service: SharedserviceService, private dataservice: DatatranferService){

  }

  // ngOnInit() {

  //   this.productops = this.dataservice.products;
  //   alert("Reality Check!");
  //   console.log(this.productops);
  // }

  
    ngOnInit() {
      this.productops = this.dataservice.products;
      alert("Reality Check!");
  
      // Convert the array to a comma-separated string
      const commaSeparatedString = this.productops.join(',');

      alert(commaSeparatedString);
  
      this.service.getMaterialOperations(commaSeparatedString)
        .subscribe(
          (data: any[]) => {
            this.materialOps = data; // Assign the result to the materialOps variable
            console.log(this.materialOps);
          },
          (error: any) => {
            console.error(error); // Handle any errors
          }
        );


    }
  



}
