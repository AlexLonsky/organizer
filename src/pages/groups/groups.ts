import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CreateGroupPage} from './create-group/create-group'
@Component({
    selector: 'page-groups',
    templateUrl: 'groups.html'
})
export class GroupsPage {

    constructor(public navCtrl: NavController) {

    }

    goToCreateGroup() {
        this.navCtrl.push(CreateGroupPage);
    }
}
