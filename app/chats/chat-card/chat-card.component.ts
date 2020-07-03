import { Component, OnInit, Input } from '@angular/core';
import { MessagingService } from '../../messaging.service';
import { UserInfoService } from '../../user-info.service';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.css'],
})
export class ChatCardComponent implements OnInit {
  name: string;
  @Input() lastMessage: string;
  @Input() photoURL: string;
  @Input() users: [];
  @Input() isGroupChat: boolean;
  @Input() currentUser: string;
  constructor(
    private messagingService: MessagingService,
    public userInfoService: UserInfoService
  ) {}

  ngOnInit(): void {
    if (!this.isGroupChat) {
      this.users.forEach((val) => {
        if (val !== this.currentUser) {
          this.messagingService.getUsers(val).subscribe((conversationUser) => {
            this.name = conversationUser[0].displayName;
            this.photoURL = conversationUser[0].photoURL;
          });
        }
      });
    }
  }
}
