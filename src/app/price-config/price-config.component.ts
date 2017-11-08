import { Component, OnInit } from '@angular/core';
import { PriceConfigService } from '../Services/price-config.service';
import { IpriceConfig } from '../Interface/iprice-config';


@Component({
  selector: 'app-price-config',
  templateUrl: './price-config.component.html',
  styleUrls: ['./price-config.component.css']
})
export class PriceConfigComponent implements OnInit {

  constructor(private priceConfigService: PriceConfigService) { }
  priceConfig: IpriceConfig;

  ngOnInit() {
    this.getPriceConfig();
    //this.updatePriceConfig();
  }

  getPriceConfig() {

    /*this.priceConfigService.getPriceConfig().subscribe((response) => console.log(response),
    (error) => console.log(error) );
    */
    this.priceConfigService.getPriceConfig()
      .subscribe((config: IpriceConfig) => ( console.log(config),
        this.priceConfig = config ),
      (error) => console.log(error));
  }

  updatePriceConfig() {
    console.log('update');
    // const priceConfig1 = {
    //   AMPrice: 20,
    //   DeliveryCost: 20,
    //   PMPrice: 22,
    //   Profit: 12,
    //   ValidityHours: 12,
    //   LatestCutOffDate: new Date('February 4, 2016 10:13:00'),
    //   VAT: 87
    // };

    this.priceConfig.LatestCutOffDate = new Date('February 4, 2016 10:13:00');
    this.priceConfigService.updatePriceConfig(this.priceConfig)
      .subscribe((response) => (console.log(this.priceConfig), console.log(response)),
      (error) => console.log(error));

  }

}
