import { CurrenciesData } from './shared/CurrenciesData';
import { CurrencyDataService } from './shared/currency-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public response: any;
  constructor(public service: CurrencyDataService) {}
  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.service.curList = data;
      data.forEach((element: CurrenciesData) => {
        this.service.curMap.set(`${element.cc}`, element.rate);
      });
      this.service.curMap.set(`UAH`, 1);
    });
  }
}
