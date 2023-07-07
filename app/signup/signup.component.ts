import { Component } from '@angular/core';
import { Signup } from './signup';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signup:Signup = new Signup()
  onSignup(){
    console.log(this.signup)
  }
}
