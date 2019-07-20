import { Observable, of } from 'rxjs';
import { Client } from './client';

export class ClientItemCatalog {
    private clientsObj = JSON.parse(localStorage.getItem('clients'));
    private clientsNames = [];
    private availableItems: Client[];

    constructor(){
        this.clientsObj.map(client => {
            this.clientsNames.push({companyName: (client.companyName).toLowerCase()})
        })
        this.availableItems = [...this.clientsNames]
    }

    items(query: string): Observable<Client[]> {
        return of(this.availableItems
            .filter(i => i.companyName.includes((query).toLowerCase()))
        );
    }
}
