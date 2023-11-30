import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedserviceService } from 'src/app/services/sharedservice.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addmach',
  templateUrl: './addmach.component.html',
  styleUrls: ['./addmach.component.css']
})
export class AddmachComponent implements OnInit {

  constructor(private service: SharedserviceService){

  }

  ngOnInit(): void {
    
  }

  addmForm: FormGroup = new FormGroup(
    {
      ch_name: new FormControl(""),
      ch_shortname: new FormControl(""),
      ch_ulogin: new FormControl(""),
      ch_usession: new FormControl("")
    }
  );

  // addmachsubmitted(obj: any){
  //   console.log(this.addmForm.value);
  //   this.service.addMachine(obj);
  // }

  addmachsubmitted() {
    console.log(this.addmForm.value);
    this.service.addMachine(this.addmForm.value).subscribe(
      (response) => {
        console.log(response);
        // Additional logic or actions after successful submission
      },
      (error) => {
        console.error(error);
        // Handle the error, display a message, or perform any necessary actions
      }
    );
  }
  



}
