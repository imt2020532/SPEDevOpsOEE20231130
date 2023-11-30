import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

@Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'Home',
      icon: 'fa-solid fa-house',
      pathway: '/home',
    },
    {
      number: '2',
      name: 'Machine List',
      icon: "fas fa-server",
      pathway: '/Machine',
    },
    {
      number: '3',
      name: 'OEEEntry1',
      icon: 'fas fa-users',
      pathway: '/oeeentryone',
    },
    {
      number: '4',
      name: 'buffer4',
      icon: 'fa-solid fa-house',
      pathway: '/machine',
    }

  ];

  constructor(){

  }

  ngOnInit(): void {
      
  }

}
