import { Component, OnInit } from '@angular/core';


import { FriendsService } from '../friends.service';

@Component({
    moduleId: module.id,
    selector: 'app-friends',
    templateUrl: 'friends.component.html',
    styleUrls: ['friends.component.css'],
    providers: [FriendsService]
})
export class FriendsComponent implements OnInit {

    title:string;

    constructor(private friendsService: FriendsService) {
        this.title = 'FL2'
    }

    ngOnInit() {
    }

    logOut() {
        this.friendsService.logOut();
    }

}
