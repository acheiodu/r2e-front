import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  title = 'R2E';
  client: any;

  constructor(private appService: AppService) {}

  getClientData() {
    console.log("Getting client data.");
    this.appService.getClient().
    subscribe(clientJSON => this.client = clientJSON);
  }

}