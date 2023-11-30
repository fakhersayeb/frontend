import { Injectable } from '@angular/core';
import  io from 'socket.io-client';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io('http://localhost:3000');
  constructor() { }
  joinRoom(data: { user: string; room: string; })
  {
      this.socket.emit('join',data);
  }
  
  newUserJoined()
  {
      let observable = new Observable<{user:String, message:String}>(observer=>{
          this.socket.on('new user joined', (data: { user: String; message: String; } | undefined)=>{
              observer.next(data);
          });
          return () => {this.socket.disconnect();}
      });

      return observable;
  }
  leaveRoom(data: { user: string; room: string; }){
    this.socket.emit('leave',data);
}

userLeftRoom(){
    let observable = new Observable<{user:String, message:String}>(observer=>{
        this.socket.on('left room', (data: { user: String; message: String; } | undefined)=>{
            observer.next(data);
        });
        return () => {this.socket.disconnect();}
    });

    return observable;
}
sendMessage(data: { user: string; room: string; message: string; })
{
    this.socket.emit('message',data);
}

newMessageReceived(){
    let observable = new Observable<{user:String, message:String}>(observer=>{
        this.socket.on('new message', (data: { user: String; message: String; } | undefined)=>{
            observer.next(data);
        });
        return () => {this.socket.disconnect();}
    });

    return observable;
}
}
