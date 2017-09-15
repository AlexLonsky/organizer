import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {Event} from '../event'

@Component({
    selector: 'page-createEvent',
    templateUrl: 'createEvent.html'
})
export class CreateEventPage {
    public viewPlayers: boolean = false;
    public viewParticipants: boolean = false;
    public viewShortage: boolean = false;

    constructor(public navCtrl: NavController,
                public alertCtrl: AlertController) {

    }
    players(){
        this.viewPlayers = this.viewPlayers? false: true;
    }
    participants() {
        this.viewParticipants = this.viewParticipants? false: true;
    }
    shortage() {
        this.viewShortage = this.viewShortage? false: true;
    }
    showCheckbox() {
        let alert = this.alertCtrl.create({
            title: 'Запись успешно создана!',
            subTitle: 'Игрокам основного состава отправлены приглашения.',
            cssClass: 'alert',
            message: 'В случае если кто-то из них не сможет прийти мы вам отправим уведомление о недоборе группы и предложим разослать приглошения игрокам запасного состава.',
            buttons: ['OK'],
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Отправить приглашения игрокам запасного состава сразу',
            checked: false
        });
        alert.present();
        this.navCtrl.setRoot(Event);
    }
    

}
