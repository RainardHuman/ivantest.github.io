import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  currentUserDisplayName: string;
  currentUserProfilePicture: string;
  otherUserDisplayName: string;
  otherUserProfilePicture: string;

  public currentLogInUserSubject = new BehaviorSubject([]);
  public currentLogInUserObservable = new Observable<any>();
  public currentChatUserSubject = new BehaviorSubject([]);
  public currentChatUserObservable = new Observable<any>();

  constructor(private http: HttpClient) {
    this.currentLogInUserObservable = this.currentLogInUserSubject.asObservable();
    this.currentChatUserObservable = this.currentChatUserSubject.asObservable();
  }

  public setCurrentLogInUser(userID: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post(
        'http://127.0.0.1:3000/users/get',
        JSON.stringify({ userID }),
        httpOptions
      )
      .subscribe((value) => {
        this.currentUserDisplayName = value[0].displayName;
        this.currentUserProfilePicture = value[0].photoURL;
        return value;
      });
  }

  public setOtherLogInUser(userID: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post(
        'http://127.0.0.1:3000/users/get',
        JSON.stringify({ userID }),
        httpOptions
      )
      .subscribe((value) => {
        this.otherUserDisplayName = value[0].displayName;
        this.otherUserProfilePicture = value[0].photoURL;
        return value;
      });
  }
}
