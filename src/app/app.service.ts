import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  base_url = "https://r2e.mybluemix.net";
  constructor(private http: Http) { }

  headers = new Headers({'Content-Type': 'application/json'});

  getClient(): Observable<any> {
		return this.http.get(this.base_url + '/api/clientes/001', this.headers).map(response => response.json());
  }

  insertClient(): Observable<any> {
		return this.http.post(this.base_url + '/db/clientes/001', this.headers);
  }

}
