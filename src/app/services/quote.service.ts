import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Quote} from '../domain/quote.model';
import 'rxjs/Rx';
import {Http} from '@angular/http';

@Injectable()
export class QuoteService {

  constructor(protected http: Http, @Inject('BASE_CONFIG') protected config) {
  }

  getQuote(): Observable<Quote> {
    const uri = `${this.config.uri}/quotes/${Math.floor(Math.random() * 5)}`;
    return this.http.get(uri)
      .debug('quote:')
      .map(res => res.json() as Quote);
  }

}
