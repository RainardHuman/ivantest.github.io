import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  public messagesSubject = new BehaviorSubject([]);
  public messagesObservable = new Observable<any>();
  public currentChatSubject = new BehaviorSubject({});
  public currentChatObservable = new Observable<any>();
  public currentConversationSubject = new BehaviorSubject([]);
  public currentConversationObservable = new Observable<any>();
  public currentChats;
  constructor(private http: HttpClient) {
    this.messagesObservable = this.messagesSubject.asObservable();
    this.currentChatObservable = this.currentChatSubject.asObservable();
    this.currentConversationObservable = this.currentConversationSubject.asObservable();
  }

  public setCurrentChat(currentUser) {
    this.currentChatSubject.next(currentUser);
  }
  public setMessages(messages) {
    this.messagesSubject.next(messages);
  }
  public setConversations(conversations) {
    this.currentConversationSubject.next(conversations);
  }

  public getConversation(user: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post(
        'http://127.0.0.1:3000/conversations/get',
        JSON.stringify({ userID: user }),
        httpOptions
      )
      .subscribe((value) => {
        this.setConversations(value);
        this.currentChats = value;
        return value;
      });
  }
  public getMessages(conversationID: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post(
        'http://127.0.0.1:3000/messages/get',
        JSON.stringify({ conversationID }),
        httpOptions
      )
      .subscribe((value) => {
        this.setMessages(value);
        return value;
      });
  }
  public getUsers(user: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(
      'http://127.0.0.1:3000/users/get',
      JSON.stringify({ userID: user }),
      httpOptions
    );
  }
}
