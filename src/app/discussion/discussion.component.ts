import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat.service';
@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

user!:string;
room!:string;
invisible=true;
messageText!:string;
messageArray:Array<{user:String,message:String}> = [];
  constructor(private chatservice:ChatService) {
    this.chatservice.newUserJoined()
    .subscribe(data=> this.messageArray.push(data));
    this.chatservice.userLeftRoom()
    .subscribe(data=>this.messageArray.push(data));
    this.chatservice.newMessageReceived()
    .subscribe(data=>this.messageArray.push(data));
   }

  ngOnInit(): void {
  }
  visible(){
    this.invisible=false;
  }
  INvisible(){
    this.invisible=true;
  }
  join(){
    this.chatservice.joinRoom({user:this.user,room:this.room});
alert(this.user);
 alert("vous rejoignez la salle ");
 alert(this.room);
  }
  leave(){
    this.chatservice.leaveRoom({user:this.user,room:this.room});
    alert(this.user);
    alert("vous quittez la salle ");
    alert(this.room);
    this.user="";
    this.room="";
  }
  sendMessage()
  {
      this.chatservice.sendMessage({user:this.user, room:this.room, message:this.messageText});
  }

}
