import { Component,OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.scss']
})
export class ChildcompComponent {
  @Output() childButtonEvent = new EventEmitter();
  @Output() onInitEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.onInitEvent.emit('This meesage is appeared automatically as the child component will intialized. This message is defined in the child component ngOninit method');
  }

  clickHandler() {
    this.childButtonEvent.emit('This message is appearing here because user has clicked the button which is available in child component');
  }
}
