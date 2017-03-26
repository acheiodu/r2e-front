import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  headers = new Headers({'Content-Type': 'application/json'});

  getClient(): Observable<any> {
		return this.http.get('http://localhost:3000/api/clientes/001', this.headers).map(response => response.json());
  }

}
