import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { PriceConfigService } from '../Services/price-config.service';
import { IpriceConfig } from '../Interface/iprice-config';
import { ToastsManager, Toast } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';

// date control
// https://icklechris.github.io/ic-datepicker/installation

@Component({
  selector: 'app-price-config',
  templateUrl: './price-config.component.html',
  styleUrls: ['./price-config.component.css']
})
export class PriceConfigComponent implements OnInit {


  constructor(private priceConfigService: PriceConfigService,
    private toastr: ToastsManager, vcr: ViewContainerRef,
    private router: Router
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }
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
      .subscribe((config: IpriceConfig) => (console.log(config),
        this.priceConfig = config),
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

    // console.log(this.priceConfig.LatestCutOffDate);
    // this.priceConfigService.updatePriceConfig(this.priceConfig)
    //   .subscribe((response) => (console.log(this.priceConfig), console.log(response)),
    //   (error) => console.log(error));

    console.log(this.priceConfig.LatestCutOffDate);
    this.priceConfigService.updatePriceConfig(this.priceConfig)
      .subscribe((response) => (


        this.toastr.success('You are awesome!', 'Success!', { dismiss: 'controlled' })
          .then((toast: Toast) => {
            setTimeout(() => {
              this.toastr.dismissToast(toast);
              console.log('Success -2');
              //         this.router.navigateByUrl('/inputoutput');
              this.router.navigate(['/inputoutput']);
            }, 3000);
          })


      ),
      (error) => (
        this.toastr.error('This is not good!', 'Oops!')
      )
    
    );



  }

  onDatepickerDateChange($event) {
    this.priceConfig.LatestCutOffDate = $event.previous.format('L');
    console.log(`Date changed from ${$event.previous.format('L')} to ${$event.value.format('L')}`);
  }

  testToaster() {


    this.toastr.success('You are awesome!', 'Success!', { dismiss: 'controlled' })
      .then((toast: Toast) => {
        setTimeout(() => {
          this.toastr.dismissToast(toast);
          console.log('Success -2');
          //         this.router.navigateByUrl('/inputoutput');
          this.router.navigate(['/inputoutput']);
        }, 3000);
      });

    //this.toastr.success('You are awesome! Click to view details.', 'Success!', {data: {url: '/inputoutput'}});

    //  this.toastr.custom('<span style="color: #bd362f">This message should be in red with blank background. Click to dismiss.</span>',
    // 'Custom Message', {dismiss: 'click'});
  }

}
