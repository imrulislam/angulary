import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  monthlyPrice = 10.00;
  yearlyPrice = 29.00;

  constructor() { }

  ngOnInit() {
  }

  onValChange(event): void {
    if (event === 'Monthly') {
      this.monthlyPrice = 10.00;
      this.yearlyPrice = 29.00;
    }
    if (event === 'Yearly') {
      this.monthlyPrice = 100.00;
      this.yearlyPrice = 159.00;
    }
  }


}
