import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  userName:string;
  password:string;
  constructor(public navCtrl: NavController) {

  }



  login() {
   console.log(this.userName);
   console.log(this.password);
  }
}
