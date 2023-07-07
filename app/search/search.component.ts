import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  _searchQuery:string="Sony..."

  get searchQuery():string{
    return this._searchQuery
  }
  set searchQuery(value:string){
    console.log(value)
    this._searchQuery=value
  }
}
