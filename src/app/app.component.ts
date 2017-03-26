import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {

  title = 'R2E';
  client: any;
  product: any;
  case: any;
  flaggedCase = false;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.client = {empty: true};
    this.product = {empty: true};
    this.case = {empty: true};
  }

  flagCase() {
    if(!this.flaggedCase)
      this.flaggedCase = true;
    else
      this.flaggedCase = false;
  }

  insertClient() {
    console.log("Inserting client data...");
    this.appService.insertClient().subscribe();
  }

  getClient() {
    console.log("Getting client data...");
    this.appService.getClient().
    subscribe(clientJSON => this.client = clientJSON);
  }

  searchClient() {
    if(this.client.empty) {
      this.client = {
        name: "Rodrigo Moreira",
        phone: "(11) 37316548",
        email: "rodrigo@gmail.com",
        cpf: "42764598478",
        gender: "Masculino",
        address: "Av Paulista, 1000 Ap 1153",
        city: "São Paulo",
        state: "São Paulo",
        country: "Brasil",
        empty: false
      };
    } else {
      this.client = {empty: true};
    }
  }

  searchProduct() {
    if(this.product.empty) {
      this.product = {
        description: "Plano Vivo Pré Controle",
        startDate: "02/05/2012",
        empty: false
      };
    } else {
      this.product = {empty: true};
    }
  }

  searchCase() {
    if(this.case.empty) {
      this.case = {
        id: "749367558",
        type: "Reclamação",
        reason: "Cobrança indevida",
        description: "Boleto gerado com o valor incorreto.",
        observation: "O cliente ligou pois sua conta que deveria vir no valor de R$79,90 chegou em sua residência com o valor de R$345,50.",
        empty: false
      };
    } else {
      this.case = {empty: true};
    }
  }

}