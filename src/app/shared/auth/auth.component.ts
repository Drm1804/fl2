import { Component, OnInit } from '@angular/core';

import { FriendsService } from '../friends.service';

@Component({
  moduleId: module.id,
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  providers: [FriendsService]
})
export class AuthComponent {

  constructor(private friendsService:FriendsService) {}


  checkUser() {
    this.friendsService.checkStatusLogin();
    return false;
  }
}
