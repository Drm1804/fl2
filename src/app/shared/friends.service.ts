///<reference path="../globals.d.ts"/>
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class FriendsService {

    public friends: any;
    public _friendsObserver: any;
    private _friends:any = [];

    constructor() {
        this.friends = new Observable(observer => {
            this._friendsObserver = observer;
        });

        this.init();
    }

    fetchFriends() {
        this._friendsObserver.next(this._friends);
    }

    init() {
        VK.init({
            apiId: 4986848
        });
        this.checkStatusLogin();
    }

    logOut() {
        localStorage.removeItem('user.ses');
        VK.Auth.logout();
    }

    getFriends() {
        VK.Api.call('friends.get', {fields: ['photo_50','education']}, (r) =>{
            if(r.response) {
                this._friends = r.response;
                this.fetchFriends();
            }else{
                console.log("Ошибка, не удалось получить списко друзей!");
            }
        });
    }

    checkStatusLogin() {
        VK.Auth.getLoginStatus((response)=> {
            if (response.session && localStorage.getItem('user.ses') !== null) {
                this.getFriends()
            } else {
                VK.Auth.login((response) => {
                    if (response.session) {
                        localStorage.setItem('user.ses', JSON.stringify(response.session));
                        this.getFriends()
                    } else {
                        return false;
                    }
                });
            }
        })
    }

}
