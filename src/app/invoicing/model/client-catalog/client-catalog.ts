import { Observable } from 'rxjs';
import { Client } from './client';

export abstract class ClientCatalog {
    abstract items(query: string): Observable<Client[]>;
}
