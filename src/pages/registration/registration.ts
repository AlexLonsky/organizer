import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Nav } from 'ionic-angular';
import {EventPage} from '../event/event'
import {LoginPage} from '../login/login'
import {GlobalService} from '../../services/global.services'
import {Storage} from '@ionic/storage';

@Component({
    selector: 'page-registration',
    templateUrl: 'registration.html'
})
export class RegistrationPage {
    @ViewChild(Nav) nav: Nav;
    
    userName:string;
    phoneNumber:string;
    public consent: boolean = false;
    public next: number = 1;
    public firsNext: boolean = false;
    public nextTelephone: boolean = false;
    constructor(public navCtrl: NavController,
                public globalService: GlobalService,
                public storage: Storage,
                public alertCtrl: AlertController) {

    }
    signUp() {
        this.navCtrl.push(LoginPage);
    }

    login(name) {
        this.userName = name;
        let data: any = {
            phoneNumber: this.phoneNumber
        };
        this.globalService.httpRequestPost(data, 'api/verifyPhone').then((res) => {
            if (res.description.status == 'OK' || res.description.exist) {
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
            }
        });
    }
    checkCode(code) {
        let data = {
            "phoneNumber": this.phoneNumber,
            "deviceToken": "string",
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
    consentCheck(e) {
        this.consent = e.value;
        console.log(e.value)
    }
    nextView(number) {
        if(number) {
            this.phoneNumber = number.value;
            if(this.phoneNumber.length == 9) {
            }
        }
        this.next++;
    }
    activateBtn(e) {
        let num: any = parseInt(e.target.value);
        num = num + '';
        if(num.length === 9){
            this.nextTelephone = true;
        }
        else{
            this.nextTelephone = false;
        }
    }
   
}