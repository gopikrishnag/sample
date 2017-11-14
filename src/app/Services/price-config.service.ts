import { Injectable } from '@angular/core';
import {  Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {IpriceConfig } from '../Interface/index';

@Injectable()
export class PriceConfigService {

  constructor(private http: Http) { }
  getPriceConfig(): Observable<IpriceConfig>  {
    console.log('done');
   // return this.http.get('http://api.marketorders.co.uk/priceconfig');
   return this.http.get('http://api.marketorders.co.uk/priceconfig')
   .map((response: Response) => {
    // const data =  response.json();
   //  const result = JSON.stringify(data).replace(/]|[[]/g, '');
    // return JSON.parse(data);
    return response.json();
   } );

   // return 'done';
  }
  updatePriceConfig(item: IpriceConfig){
    const body = JSON.stringify(item).replace(/]|[[]/g, '');
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
console.log(item);
    return this.http.post('http://api.marketorders.co.uk/UpdateConfig', item, options);
  /*  .map((res: Response) => {
      const body = res.json();
      const result = JSON.stringify(body);
      return result;
    })*/
    //http://embed.plnkr.co/9luTng/?show=preview  -- Login sample code

    //Gopi fix the error handling
  //  .catch((error: Response) => {console.log(error); });
    // return this._http.post("http://test.api.marketorders.co.uk/UpdateConfig", item, options).map(this.updateCallback).catch(this.handleError);
}

}
