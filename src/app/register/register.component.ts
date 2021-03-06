import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import {  UserService, AlertService } from '../services/index';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//http://embed.plnkr.co/9luTng/?show=preview   -- Gopi
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }
  register() {
    this.loading =  true;
    this.alertService.success('Registration successful', true);

    // this.userService.create(this.model)
    //   .subscribe(
    //   data => {
    //     this.alertService.success('Registration successful', true);
    //     this.router.navigate(['/login']);
    //   },
    //   error => {
    //     this.alertService.error(error);
    //     this.loading = false;
    //   });
  }
}
