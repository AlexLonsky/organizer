import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


//Pages
import {CreateEventPage} from './createEvant/createEvent'

@Component({
    selector: 'page-event',
    templateUrl: 'event.html'
})
export class EventPage {

    constructor(public navCtrl: NavController) {

    }

    goToCreateEvent() {
        this.navCtrl.push(CreateEventPage);
    }

}
