import { Component, OnInit, Input } from '@angular/core';
import { AppModel } from '../app.model';
import { ChatService } from '../chat.service';
import { MessagingService } from '../messaging.service';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  @Input() currentConversation: string;
  @Input() currentUser: string;
  @Input() ownDisplayName: string;
  @Input() ownProfileURL: string;
  name = 'Anonymous';
  newMessage: string;
  tempMessageList: [];
  messageList: AppModel[];
  clientsAmount;

  constructor(
    private chatService: ChatService,
    private messagingService: MessagingService,
    public userInfoService: UserInfoService
  ) {
    this.messagingService.currentChatObservable.subscribe((value) => {
      this.messagingService.getMessages(value);
    });
    this.messagingService.messagesObservable.subscribe((value) => {
      this.tempMessageList = value;
    });
    this.getCurrentUserInfo();
  }

  public getCurrentUserInfo() {
    this.userInfoService.currentChatUserObservable.subscribe((value) => {
      console.log(value);
    });
  }

  sendMessage() {
    this.chatService.sendChat({
      name: this.name,
      message: this.newMessage,
      processed: null,
      sent: Date.now(),
      arrived: null,
      socketId: null,
    });
    this.newMessage = '';
  }
  public getMilliseconds(val: number): string {
    return `${new Date(val).getHours()}:${new Date(
      val
    ).getMinutes()}:${new Date(val).getSeconds()}.${new Date(
      val
    ).getMilliseconds()}`;
  }

  ngOnInit() {
    this.chatService.receiveChat().subscribe((message: AppModel) => {
      this.messageList.push({
        ...message,
        arrived: Date.now(),
      });
      console.log(message);
    });
    this.chatService.getClients().subscribe((clients) => {
      this.clientsAmount = clients;
    });
  }
}
