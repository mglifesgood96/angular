import { Component, OnInit } from '@angular/core';
import { clients } from '../constructors/clients.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  
  clients: clients[] = [
    new clients('4f', 'ul. Wąwozowa 4'),
    new clients('Umbro', 'ul. Dolnych Młynów 5'),
    new clients('Adidas', 'ul. Felińskiego 6'),
    new clients('Puma', 'ul. Handlowa 10'),
    new clients('UnderArmour', 'ul. Felińskiego 6'),
    new clients('Nike', 'ul. Felińskiego 6'),
    new clients('Everlast', 'ul. Felińskiego 6')
  ];

  constructor() { }

  ngOnInit() {
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("clients", JSON.stringify(this.clients));
    }
  }

}
