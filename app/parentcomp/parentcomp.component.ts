import { Component } from '@angular/core';

@Component({
  selector: 'app-parentcomp',
  templateUrl: './parentcomp.component.html',
  styleUrls: ['./parentcomp.component.scss']
})
export class ParentcompComponent {
  msgOnButtonClick!: string;
  msgOnChildCompInit!: String;

  name = 'Angular';

  receivedMessageHandler(p: string) {
    this.msgOnButtonClick = p;
  }

  receiveAutoMsgHandler(p: String) {
    this.msgOnChildCompInit = p;
  }
}
