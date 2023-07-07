import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Todos{
  name:string;
  address:string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  url="https://jsonplaceholder.typicode.com/photos";
  httpData:any;

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.callApi();
  }

  callApi(){
    this.http.get<Todos[]>(this.url).subscribe((data)=>{
      this.httpData=data;
    })
  }
}
