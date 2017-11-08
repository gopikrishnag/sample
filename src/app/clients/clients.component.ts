import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {



  users = [{
    id: 1,
    name: 'Gopi'
  },
  {
    id: 2,
    name: 'Suji'
  },
  {
    id: 3,
    name: 'Deepthi'
  },
  {
    id: 4,
    name: 'Haritha'
  }];

  constructor() { }

  ngOnInit() {
  }
}
