import { CurrenciesData } from './CurrenciesData';
import { environment } from './../../environments/environment';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyDataService {
  public currenciesList: Array<CurrenciesData>;
  public currenciesMap: Map<string, number> = new Map();

  constructor(public http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(environment.apiURL, {
      responseType: 'json',
    });
  }
}
