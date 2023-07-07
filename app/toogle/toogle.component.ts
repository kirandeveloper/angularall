import { Component } from '@angular/core';

@Component({
  selector: 'app-toogle',
  templateUrl: './toogle.component.html',
  styleUrls: ['./toogle.component.scss']
})
export class ToogleComponent {
  name = 'Angular';
  display = false;
  Show:boolean = true
  onPress() {
    //this.display = true;

    //To toggle the component
    this.Show = !this.Show; //not equal to condition
    this.display = !this.display;
  }
}
