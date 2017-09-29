import { Component } from '@angular/core';


@Component({
    selector: 'page-second-team',
    templateUrl: 'secondTeam.html'
})
export class SecondTeamPage {
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
