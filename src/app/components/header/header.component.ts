import { CurrencyDataService } from './../../shared/currency-data.service';
import { Component, OnInit } from '@angular/core';
import { CurrenciesData } from 'src/app/shared/CurrenciesData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public service: CurrencyDataService) {}
}
