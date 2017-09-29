import { Component } from '@angular/core';


@Component({
    selector: 'page-first-team',
    templateUrl: 'firstTeam.html'
})
export class FirstTeamPage {
    public showSearch: boolean = false;
    public team: string = 'groups';

    constructor() {
    }
    searchContact(event) {

    }
    viewSearch() {
        this.showSearch = this.showSearch ? false : true;
    }
}
