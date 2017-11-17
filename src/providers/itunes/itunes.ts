import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ItunesProvider {

  apiRoot:string = 'https://itunes.apple.com/search';
  results: Object[];

  constructor(public http: HttpClient) {
    console.log('Hello ItunesProvider Provider');
  }

  search(term:string) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.results = res['results'];
            resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
}

