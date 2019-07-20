import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap, tap, map, retry, filter } from 'rxjs/operators';
import {ClientCatalog} from '../model/client-catalog/client-catalog';
import {Client} from '../model/client-catalog/client';

interface Suggestion{
  companyName : string;
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  //public companyName: string = '';
  private searchQuery = new Subject<string>();
  private serachResults = this.searchQuery.pipe(
    debounceTime(100),
    filter(q => q.length >= 1),
    switchMap(q => this.ClientCatalog.items(q)),
    map(data => this.toAnotherForm(data)),
    tap(data => console.log(data)),
    retry(3),
  )

  suggestions: Suggestion[] = [];

  constructor( private ClientCatalog: ClientCatalog ) { }

  ngOnInit() {
    this.serachResults.subscribe((items) => {
      this.suggestions = items;
    })
  }

  toAnotherForm(data : Client[]): Suggestion[] {
    return data.map( i => {
      return{
        companyName : i.companyName
      }
    })
  }

  autoComeplete($event): void{
    this.searchQuery.next($event.target.value);
  }

  selectSuggestion(item: Suggestion): void{
    //this.companyName = item.companyName;
    this.suggestions = [];
  }

}
