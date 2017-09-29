import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {AddUsersPage} from './add-users/add-users'
import {GlobalService} from '../../../services/global.services'

@Component({
    selector: 'page-create-gropu',
    templateUrl: 'create-group.html'
})
export class CreateGroupPage {
   public newGroup: Object = {
       nameGroup:'',
       imageGroup : '',
       peopleInGroup : [{"name":"Nikitos","phone":["+380669998877"]}, {"name":"Alex","phone":["+380669994444"]},{"name":"Vova","phone":["+380669993333"]}]
   };

    constructor(public navCtrl : NavController,
                public globalService : GlobalService) {
    }

    selectUsers() {
        this.navCtrl.push(AddUsersPage);
    }

    cleanField() {
        this.newGroup = {};
    }
    saveNewGroup() {
        console.log(this.newGroup)
        this.globalService.httpRequestPost(this.newGroup, 'api/newGroup').then((res) => {
        console.log(res)
    })
    }
}
