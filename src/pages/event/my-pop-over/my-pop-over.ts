import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, PopoverController  } from 'ionic-angular';



//Pages

@Component({
    selector: 'page-pop-over',
    templateUrl: 'my-pop-over.html'
})
export class MyPopOverPage {

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    }
    nearestEvent() {
        let prompt = this.alertCtrl.create({
            title: 'Отменить ближайшее',
            message: "Ближайшее событие будет отменено. Все игроки получат уведомление.",
            buttons: [
                {
                    text: 'Ok',
                    handler: data => {
                        console.log('ок');
                    }
                },
                {
                    text: 'Отмена',
                    handler: data => {
                        console.log('Отмена');
                    }
                }
            ]
        });
        prompt.present();
    }
    reminder() {
        let prompt = this.alertCtrl.create({
            title: 'Отправить напоминание',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Текст сообщения'
                },
            ],
            buttons: [
                {
                    text: 'Ok',
                    handler: data => {
                        console.log('ок');
                    }
                },
                {
                    text: 'Отмена',
                    handler: data => {
                        console.log('Отмена');
                    }
                }
            ]
        });
        prompt.present();
    }
    removeEvent() {
        let prompt = this.alertCtrl.create({
            title: 'Удалить событие',
            message: "Событие 'мини-футбол' будет удалено. Все игроки получат уведомление.",
            buttons: [
                {
                    text: 'Ok',
                    handler: data => {
                        console.log('ок');
                    }
                },
                {
                    text: 'Отмена',
                    handler: data => {
                        console.log('Отмена');
                    }
                }
            ]
        });
        prompt.present();
    }

 
}
