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

  constructor(public http: HttpClient) {}

  /*request for all currencies that bank is provides */

  getData(): Observable<any> {
    return this.http.get(environment.apiURL, {
      responseType: 'json',
      // params: { valcode: 'EUR' },
    });
  }
}
