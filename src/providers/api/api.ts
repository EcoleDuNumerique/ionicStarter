import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  public api: 'https://secure.lerugbynistere.fr/api/';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  /**
   * GET
   * @param {string} endpoint
   * @param {any[]} parameters
   * @returns {Observable<Object>}
   */
  get(endpoint ?: string, parameters ?: any[]) {
    let params = new HttpParams();
    parameters.forEach.call((key, value) => {
      params.set(key, value);
    });

    return this.http.get(this.api + endpoint, {params: params});
  }

  /**
   * POST
   * @param endpoint
   * @param body
   * @returns {Observable<Object>}
   */
  post(endpoint, body) {
    return this.http.post(this.api + endpoint, body);
  }

  /**
   * PUT
   * @param endpoint
   * @param body
   * @returns {Observable<Object>}
   */
  put(endpoint, body) {
    return this.http.put(endpoint, body);
  }

  /**
   * PATCH
   * @param endpoint
   * @param body
   * @returns {Observable<Object>}
   */
  patch(endpoint, body) {
    return this.http.patch(endpoint, body);
  }

  /**
   * DELETE
   * @param endpoint
   * @returns {Observable<Object>}
   */
  delete(endpoint) {
    return this.http.delete(endpoint);
  }

}
