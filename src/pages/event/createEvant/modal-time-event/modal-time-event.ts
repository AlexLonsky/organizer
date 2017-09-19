import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';




@Component({
    selector: 'page-modal-time-event',
    templateUrl: 'modal-time-event.html'
})
export class ModalTimeEvent {
    public viewRepetitionEvent: boolean = false;

    constructor(public navCtrl: NavController,
                public alertCtrl: AlertController
    ) {

    }
    goBack() {
        this.navCtrl.pop();
    }
    repetitionEvent() {
        this.viewRepetitionEvent = this.viewRepetitionEvent? false: true;
    }
    repetitionDays() {
        let days: any = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        let alert = this.alertCtrl.create({
            title: 'Дни повторения',
            buttons: ['OK']
        });
        for(let day of days){
            alert.addInput({
                type: 'checkbox',
                label: day,
                checked: false
            });
        }

        alert.present();
    }

}
