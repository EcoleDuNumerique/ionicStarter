import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TestProvider Provider');
  }

  public get() {
    return this.http.get('https://api.mon-super-site.com/data');
  }
}
