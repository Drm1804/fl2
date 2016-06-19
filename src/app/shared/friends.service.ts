///<reference path="../globals.d.ts"/>
import { Injectable } from '@angular/core';

@Injectable()
export class FriendsService {

    constructor() {
        this.init();
    }


    init() {
        VK.init({
            apiId: 4986848
        });
    }


    checkStatusLogin() {
        VK.Auth.getLoginStatus((response)=> {
            if (response.session && localStorage.getItem('user.ses') !== null) {
            } else {
                VK.Auth.login((response) => {
                    if (response.session) {
                        localStorage.setItem('user.ses', JSON.stringify(response.session));
                    } else {
                        return false;
                    }
                });
            }
        })
    }

}
