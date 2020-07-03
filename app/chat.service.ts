import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { AppModel } from './app.model';
import { MessagingService } from './messaging.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(
    public socket: Socket,
    private messagingService: MessagingService
  ) {}

  public sendChat(message: AppModel) {
    this.socket.emit('message', message);
  }

  public receiveChat() {
    return this.socket.fromEvent('broadcast');
  }

  public getClients() {
    return this.socket.fromEvent('clients');
  }
}
