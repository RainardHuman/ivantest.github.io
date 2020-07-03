import { Component } from '@angular/core';
import { MessagingService } from './messaging.service';
import { UserInfoService } from './user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentConversation;
  currentUser;
  constructor(
    private messagingService: MessagingService,
    private userInfoService: UserInfoService
  ) {}

  public setCurrentUser() {
    this.messagingService.getConversation(this.currentUser);
    this.userInfoService.setCurrentLogInUser(this.currentUser);
  }
}
