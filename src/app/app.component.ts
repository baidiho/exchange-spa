import { Observable } from 'rxjs';
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
    this.response = this.service.getData().subscribe((data) => {
      this.service.currenciesList = data;
      data.forEach((element: CurrenciesData) => {
        this.service.currenciesMap.set(`${element.cc}`, element.rate);
      });
      this.service.currenciesMap.set(`UAH`, 1);
      this.response.unsubscribe();
    });
  }
}
