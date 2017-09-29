import { Component } from '@angular/core';
import { NavController, AlertController, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-time-zone',
    templateUrl: 'time-zone.html'
})
export class TimeZonePage {
    
    constructor(public navCtrl: NavController,
                public alertCtrl: AlertController,
                public viewCtrl: ViewController) {

    }



}
