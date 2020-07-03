import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css'],
})
export class MessageCardComponent implements OnInit {
  @Input() ownProfileURL: string;
  @Input() ownDisplayName: string;
  @Input() otherDisplayName: string;
  @Input() otherProfileURL: string;
  @Input() message: string;
  @Input() currentUser: string;
  @Input() senderUserID: string;

  constructor() {}

  ngOnInit(): void {}

  getTimeStamp() {
    const date = new Date(Date.now());
    const dateStr =
      ('00' + (date.getMonth() + 1)).slice(-2) +
      '/' +
      ('00' + date.getDate()).slice(-2) +
      '/' +
      date.getFullYear() +
      ' ' +
      ('00' + date.getHours()).slice(-2) +
      ':' +
      ('00' + date.getMinutes()).slice(-2);
    return dateStr;
  }
}
