import { Component } from '@angular/core';
import { NavController, AlertController, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-reminder-options',
    templateUrl: 'reminderOptions.html'
})
export class ReminderOptionsPage {
    public showOptions: boolean = true;
    public viewTypes: boolean = false;

    constructor(public navCtrl: NavController,
                public alertCtrl: AlertController,
                public viewCtrl: ViewController) {

    }

    viewOptions() {
        this.showOptions = this.showOptions ? false : true;
    }
    showTypes() {
        this.viewTypes = this.viewTypes ? false : true;
    }


}
