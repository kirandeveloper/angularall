import { Component } from '@angular/core';
import { ContactUs } from './contact';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  contactus:ContactUs = new ContactUs()
  onSignup(){
    console.log(this.contactus)
  }
}
