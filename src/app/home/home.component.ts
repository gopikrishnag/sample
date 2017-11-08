import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
/*
    // custom observable
    const mynumber = Observable.interval(1000);
    mynumber.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
    */

    /*
    const myObserable =  Observable.create((observer: Observer<string> ) => {
        setTimeout(() => {
          observer.next('First Package'); }, 2000);

          setTimeout(() => {
            observer.next('Second Package'); }, 4000);

             setTimeout(() => {
            //   // observer.error(' Error message');
             observer.complete( ); }, 5000);

              setTimeout(() => {
                observer.next('Third Package'); }, 7000);
        });
        myObserable.subscribe(
          (data: string) =>  {console.log(data); },
          (error: string) => {console.log(error); },
          () => {console.log('Completed'); }
        );
*/
  }

}
