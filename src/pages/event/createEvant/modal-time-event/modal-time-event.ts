import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import {GlobalService} from '../../../../services/global.services'



@Component({
    selector: 'page-modal-time-event',
    templateUrl: 'modal-time-event.html'
})
export class ModalTimeEvent {
    public viewRepetitionEvent: boolean = false;
    public repetitionDay: any;
    public repetition: any;
    public date_start: any;
    public date_end: any;

    constructor(public navCtrl: NavController,
                public alertCtrl: AlertController,
                public globalService: GlobalService
    ) {

    }
    goBack() {
        this.navCtrl.pop();
    }
    repetitionEvent() {
        this.viewRepetitionEvent = this.viewRepetitionEvent? false: true;
    }
    repetitionDays() {
        let days: any = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
        let alert = this.alertCtrl.create({
            title: 'Дни повторения',
            buttons: [{
                text: 'Ok',
                handler: data => {
                    this.repetitionDay = data;
                    console.log('Cancel clicked');
                }
            }]
        });
        for(let day of days){
            alert.addInput({
                type: 'checkbox',
                label: day,
                value: day,
                checked: false
            });
        }

        alert.present();
    }
    saveDate() {
        console.log(this.repetitionDay);
        console.log(this.date_start);
        console.log(this.date_end);
        console.log(this.repetition);
        let timeEvent: any = {
            repetitionDay : this.repetitionDay,
            date_start : this.date_start,
            date_end : this.date_end,
            repetition : this.repetition
        };
        this.globalService.timeEvent = timeEvent;
        this.navCtrl.pop();
    }

}
