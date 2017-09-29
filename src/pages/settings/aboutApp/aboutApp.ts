import { Component } from '@angular/core';
import { NavController, AlertController, ViewController } from 'ionic-angular';
import {SettingsPage} from '../settings'

@Component({
    selector: 'page-aboutApp',
    templateUrl: 'aboutApp.html'
})
export class AboutAppPage {

    constructor(public navCtrl: NavController,
                public alertCtrl: AlertController,
                public viewCtrl: ViewController) {

    }

    aboutApp() {
        this.navCtrl.push(SettingsPage);

    }
    test() {
        console.log('click')
    }

    closeModal() {
        this.viewCtrl.dismiss();
    }
    addNewReminderTime(time){
        this.viewCtrl.dismiss(time);
    }
}
