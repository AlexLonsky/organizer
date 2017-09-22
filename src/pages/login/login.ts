import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Nav } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { EventPage } from '../event/event';
import { GlobalService } from '../../services/global.services';

import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    @ViewChild(Nav) nav: Nav;
  phoneNumber:string;
  password:string;
    private uuid: string;
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public storage: Storage,
              public globalService: GlobalService) {

  }



  login() {
      this.storage.get('DeviceData').then((val) => {
          console.log(val.uuid)
          if (val.uuid) {
              this.uuid = val.uuid;
          }
          else {
              return;
          }
      });
      if (this.uuid) {
          let data: any = {
              "phoneNumber": this.phoneNumber,
              "deviceToken": this.uuid
          };
          this.globalService.httpRequestPost(data, 'api/login').then((res) => {
              let prompt = this.alertCtrl.create({
                  message: "Вам отправлен код в смс!",
                  inputs: [
                      {
                          name: 'title',
                          placeholder: 'Title'
                      },
                  ],
                  buttons: [
                      {
                          text: 'Cancel',
                          handler: data => {
                              console.log('Cancel clicked');
                          }
                      },
                      {
                          text: 'Save',
                          handler: data => {
                              this.checkCode('123');
                          }
                      }
                  ]
              });
              prompt.present();
          })

      }

  }

    checkCode(code) {
        let data = {
            "phoneNumber": this.phoneNumber,
            "deviceToken": this.uuid ,
            "code": code
        };
        this.globalService.httpRequestPost(data, 'api/checkCode').then((res) => {
            if(res.description.status =="OK") {
                this.navCtrl.setRoot(EventPage);
                var userToken = {token: res.description.auth_token};
                this.storage.set('userToken', userToken).then(() => {
                });


            }
        })

    }

    goToRegistration() {
        this.navCtrl.push(RegistrationPage);
    }

}
