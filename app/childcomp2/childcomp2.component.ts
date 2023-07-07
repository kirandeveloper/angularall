import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-childcomp2',
  templateUrl: './childcomp2.component.html',
  styleUrls: ['./childcomp2.component.scss']
})
export class Childcomp2Component {
  @Input() details: string | undefined;
  @Input() title: string | undefined;
  
  constructor() { }
  
  ngOnInit(): void {
  }
}
