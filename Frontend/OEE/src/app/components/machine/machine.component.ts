import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/services/sharedservice.service';
@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {
  
  constructor(private service: SharedserviceService){

  }

  mlist:any[] | undefined;

  ngOnInit(): void {
    alert('testing...');
    this.refreshmlist();
  }

  refreshmlist(){

    this.service.getmlist().subscribe(data=>
      {alert('test');
        this.mlist = data;
      });
    }

}
