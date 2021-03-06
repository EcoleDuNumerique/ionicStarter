import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ItunesProvider {

  private apiRoot:string = 'https://itunes.apple.com/';

  public results: any;
  public counter: number = 0;

  constructor(public http: HttpClient) {}

  search(term:string, offset ?: number) {
    this.results = [];
    this.counter = 0;

    let promise = new Promise((resolve, reject) => {
      //let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=10&offset=${offset}`;
      // ou
      let apiURL = this.apiRoot + 'search?term=' + term + '&media=music&limit=10&offset=' + offset;

      /*
      let params = new HttpParams();
      params.append('media', 'music');
      params.append('limit', '10');
      params.append('offset', offset.toString());
      params.append('term', term);
      */

      //let headers = new HttpHeaders();
      //headers.set('key', 'value');

      apiURL = apiURL.replace(' ', '+');
      this.http.get(apiURL)
        .toPromise()
        .then(
          response => {
            console.log(response);
            this.counter = response['resultCount'];
            this.results = response['results'];
            resolve();
          },
          error => {
            reject(error);
          }
        );
    });
    return promise;
  }

  getPromise(id): Promise <any> {
    let apiURL = this.apiRoot + 'lookup?id=' + id;
    console.log(apiURL);
    return new Promise((resolve, reject) => {
      this.http.get(apiURL).toPromise().then((response) => {
        console.log(response);
        resolve(response);
        return response;
      }, error => {
        reject(error);
      })
    });
  }

  get(id) {
    let apiURL = this.apiRoot + 'lookup?id=' + id;
    return this.http.get(apiURL);
  }
}

