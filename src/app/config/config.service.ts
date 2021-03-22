import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getCustomHeaders(): HttpHeaders {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json');
    return headers;
  }

  public sendGetRequest() {
    // let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*'); // create header object
    // let params = new HttpParams().set('param1', value1); // create params object
    return this.http.get(AppConfig.API_USERS_GET_ALL, { headers: this.getCustomHeaders() });
  }

}
