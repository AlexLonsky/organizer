import { Component } from '@angular/core';
import { NavController, AlertController, ViewController } from 'ionic-angular';
import {AboutAppPage} from './aboutApp/aboutApp'
import {ReminderOptionsPage} from './reminderOptions/reminderOptions'
import {TimeZonePage} from './time-zone/time-zone'

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class SettingsPage {
    public remind: boolean = true;
    public reminderStatus: any = {
        name:'вкл',
        value: true
    };
    constructor(public navCtrl: NavController,
                public alertCtrl: AlertController,
                public viewCtrl: ViewController) {

    }

    aboutApp() {
        this.navCtrl.push(AboutAppPage);

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
    reminderActive(e){
        this.reminderStatus.name = e.value ? 'вкл' : 'выкл';
        this.reminderStatus.value = e.value;
        console.log(e.value)
    }
    setReminderOptions() {
        if (this.reminderStatus.value) {
            this.navCtrl.push(ReminderOptionsPage);
        }

    }
    goTimeZonePage() {
        this.navCtrl.push(TimeZonePage);
    }
}
