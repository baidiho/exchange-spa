import { CurrenciesData } from './CurrenciesData';
import { environment } from './../../environments/environment';
import { Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyDataService {
  public curList: Array<CurrenciesData>;
  public curMap: Map<string, number> = new Map();
  constructor(public http: HttpClient) {}
  public $observable: Observable<any>;

  getData(): Observable<any> {
    return this.http
      .get(environment.apiURL, {
        responseType: 'json',
      })
      .pipe(take(1));
  }
}
