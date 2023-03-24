import { Observable } from 'rxjs';
import { CurrencyDataService } from './../../shared/currency-data.service';
import { Component, OnInit } from '@angular/core';
import { CurrenciesData } from 'src/app/shared/CurrenciesData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public currenciesData: Array<CurrenciesData>;
  constructor(public service: CurrencyDataService) {}
}
