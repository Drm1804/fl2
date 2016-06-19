import { Component } from '@angular/core';

import { AuthComponent } from './shared/auth/auth.component'
import { FriendsComponent } from './shared/friends/friends.component'

@Component({
  moduleId: module.id,
  selector: 'fl2-app',
  templateUrl: 'fl2.component.html',
  styleUrls: ['fl2.component.css'],
  directives: [AuthComponent, FriendsComponent]
})
export class Fl2AppComponent {


  isUser() {
    return (localStorage.getItem('user.ses') !== null)
  }

  isGuest() {
    return (localStorage.getItem('user.ses') === null)
  }
}
