import { Component, NgZone } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { FriendsService } from '../friends.service';
//import { OrderFriendsByPipe } from './shared/orderfriendsby.pipe';
@Component({
    moduleId: module.id,
    selector: 'app-friends',
    templateUrl: 'friends.component.html',
    styleUrls: ['friends.component.css'],
    providers: [FriendsService]
    //pipes: [ OrderFriendsByPipe ]
})
export class FriendsComponent{

    title:string;
    sortBy:string;

    friends: Observable<Array<string>>;

    constructor(private friendsService: FriendsService, private zone:NgZone) {
        this.title = 'FL2';
        this.sortBy = 'last_name';

        this.zone = new NgZone({enableLongStackTrace: false});
        friendsService.friends.subscribe(newFriends => {
            this.zone.run(()=> {
                this.friends = newFriends;
                console.log(this.friends)
            });
        });
        friendsService.fetchFriends();
    }

    logOut() {
        this.friendsService.logOut();
    }

    changeSort(sort:string){
        this.sortBy = sort;
    }
}
