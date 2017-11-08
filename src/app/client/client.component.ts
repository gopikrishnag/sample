import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
user: {id: string, name: string};

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.user = {id: this.route.snapshot.params['id'],
                name: this.route.snapshot.params['name'] };

/*  routing lession 11 and 12 -- sometime url changed but data not loaded , so need to use this observable */
      this.route.params.subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );

              }


}
