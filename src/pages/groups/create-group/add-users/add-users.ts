import { Component } from '@angular/core';


@Component({
    selector: 'page-add-users',
    templateUrl: 'add-users.html'
})
export class AddUsersPage {
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