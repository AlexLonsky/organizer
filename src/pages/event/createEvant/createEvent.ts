import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { NgModel} from '@angular/forms';
import {EventPage} from '../event'
import {GlobalService} from '../../../services/global.services'
import { PopoverController } from 'ionic-angular';
import {ModalTimeEvent} from './modal-time-event/modal-time-event'
import {SecondTeamPage} from './second-team/secondTeam'
import {FirstTeamPage} from './first-team/firstTeam'

// {"event":{"auto_reject_request":"1",
//     "start_date":"2016-12-12 14:31:00",
//     "end_date":"2016-12-12 16:31:00",
//     "interval":"1",
//     "day":"TH",
//     "comment":"text comment",
//     "autosend_to_reserve":"1",
//     "nameEvent":"new_test_event",
//     "count_repeat":"1",
//     "needCount":"12",
//     "creator_is_member":"1",
//     "timezone":"Europe/Kiev",
//     "mainCast":{"eventMember":
//          [{"phone":["(0994) 894 892"],
//             "name":"Anita"},
//              {"phone":["(0991) 237 654","(050) 322 3808","380 (99) 124 12 12"],"name":"Anita"},
//              {"phone":["555-522-8243"],"name":"Anna"},
//               {"phone":["380994894891"],"name":"Asas"}],
//              "group_id":""},"spareCast":{"eventMember":[],"group_id":"66"},
//          "place":"475 School","frequency" : "WEEKLY"},
//     "auth_token" : "9cea7793d94b3a2809143e452365351f"}


@Component({
    selector: 'page-createEvent',
    templateUrl: 'createEvent.html'
})
export class CreateEventPage {
    public viewPlayers: boolean = false;
    public viewParticipants: boolean = false;
    public viewShortage: boolean = false;
    public newEvent: any = {
        auto_reject_request : 0,
        eventLocation : "",
        start_date : "",
        end_date : "",
        interval : "",
        day :"",
        comment:"",
        autosend_to_reserve : 0,
        nameEvent:"",
        count_repeat:"",
        needCount:"",
        creator_is_member:"",
        timezone:""};


    constructor(public navCtrl: NavController,
                public alertCtrl: AlertController,
                public globalService: GlobalService
    ) {
    }
    players() {
        this.viewPlayers = this.viewPlayers? false: true;
    }
    participants() {
        this.viewParticipants = this.viewParticipants? false: true;
    }
    shortage() {
        this.viewShortage = this.viewShortage? false: true;
    }
    participate(e) {
        console.log(e)
    }
    showCheckbox(eventName, location, with_me, need_players) {
        console.log(with_me);
        console.log(need_players);
        this.newEvent.nameEvent = eventName.value;
        this.newEvent.eventLocation = location.value;
        this.newEvent.start_date = this.globalService.timeEvent.date_start ? this.globalService.timeEvent.date_start : '';
        this.newEvent.end_date = this.globalService.timeEvent.end_date ? this.globalService.timeEvent.end_date : '';
        this.newEvent.interval = this.globalService.timeEvent.repetition ? this.globalService.timeEvent.repetition : '';
        this.newEvent.day = this.globalService.timeEvent.repetitionDay ? this.globalService.timeEvent.repetitionDay : '';
        console.log(this.newEvent);
        console.log(this.globalService.timeEvent)

        // let alert = this.alertCtrl.create({
        //     title: 'Запись успешно создана!',
        //     subTitle: 'Игрокам основного состава отправлены приглашения.',
        //     cssClass: 'alert',
        //     message: 'В случае если кто-то из них не сможет прийти мы вам отправим уведомление о недоборе группы и предложим разослать приглошения игрокам запасного состава.',
        //     buttons: ['OK'],
        // });
        // alert.addInput({
        //     type: 'checkbox',
        //     label: 'Отправить приглашения игрокам запасного состава сразу',
        //     checked: false
        // });
        // alert.present();
        // this.navCtrl.setRoot(EventPage);
    }
    eventDate() {
        // this.navCtrl.setRoot(ModalTimeEvent)
        this.navCtrl.push(ModalTimeEvent);
        console.log(111111);
    }
    firstTeam() {
        this.navCtrl.push(FirstTeamPage);
    }

    secondTeam() {
        this.navCtrl.push(SecondTeamPage);
    }


}
