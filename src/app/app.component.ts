import { CurrencyDataService } from './shared/currency-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public service: CurrencyDataService) {}
  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.service.currenciesList = data;
    });
  }
}
