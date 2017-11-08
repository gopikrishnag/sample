import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminSections = [{
    id: 1,
    name: 'Price Config',
    shortName: 'PriceConfig'
  }
  ,
  {
    id: 2,
    name: 'Client Managment',
    shortName: 'ClientManagment'
  },
  {
    id: 3,
    name: 'Delivery Managment',
    shortName: 'DeliveryManagment'
  },
  {
    id: 4,
    name: 'Daily Follow ups',
    shortName: 'DailyFollowup'
  }

];
  constructor() { }

  ngOnInit() {
  }

}
