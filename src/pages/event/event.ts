import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController  } from 'ionic-angular';
import { MyPopOverPage } from './my-pop-over/my-pop-over';
import { GoPage } from './go/go';
import { NotGoPage } from './not-go/not-go';
import { WaitingPage } from './waiting/waiting';
import { ParticipatePage } from './participate/participate';
import { NotificationsPage} from './notifications/notifications';
import { GlobalService} from '../../services/global.services';
import {Storage} from '@ionic/storage';
// import { Camera, CameraOptions } from '@ionic-native/camera';




//Pages
import {CreateEventPage} from './createEvant/createEvent'

@Component({
    selector: 'page-event',
    templateUrl: 'event.html'
})
export class EventPage {
    

    constructor(public navCtrl: NavController,
                public popoverCtrl: PopoverController,
                navParams: NavParams,
                public storage: Storage,
                public globalService: GlobalService)
    {
        
    }
   

    goToCreateEvent() {
        this.navCtrl.push(CreateEventPage);
    }
    presentPopover() {
        let popover = this.popoverCtrl.create(MyPopOverPage);
        popover.present();
    }

    participateCheck(event) {
        let popover = this.popoverCtrl.create(ParticipatePage);
        popover.present();
    }
    notificationsWindow(event) {
        let popover = this.popoverCtrl.create(NotificationsPage);
        popover.present();
    }
    go() {
        let popover = this.popoverCtrl.create(GoPage);
        popover.present();
    }
    
    notGo() {
        let popover = this.popoverCtrl.create(NotGoPage);
        popover.present();
    }

    waiting() {
        let popover = this.popoverCtrl.create(WaitingPage);
        popover.present();
    }
   
}
