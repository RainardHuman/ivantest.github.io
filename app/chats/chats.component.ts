import { Component, OnInit, Input } from '@angular/core';
import { MessagingService } from '../messaging.service';
import { UserInfoService } from '../user-info.service';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {
  @Input() currentUser;
  conversations;
  constructor(
    private messagingService: MessagingService,
    private userInfoService: UserInfoService,
    private chatService: ChatService
  )
  {
    messagingService.currentConversationSubject.subscribe((value) => {
      this.conversations = value;
    });
  }

  public setConversation(conversationID, otherUserID) {
    this.messagingService.setCurrentChat(conversationID);
    otherUserID.forEach((value) => {
      if (value !== this.currentUser) {
        this.userInfoService.setOtherLogInUser(value);
      }
    });
  }

  ngOnInit(): void {}
}
