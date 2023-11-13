import { Component, OnInit } from '@angular/core';
import { Msg } from 'src/app/models/msg';
import { MsgService } from 'src/app/services/msg/msg.service';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss']
})
export class MsgComponent implements OnInit {
  msgs: Msg []=[];
  msg= new Msg();

  constructor(private msgService : MsgService) { }

  ngOnInit(): void {
  }


  addMsg(msg: Msg): void {
    this.msgService.addmsg(msg).subscribe(
      (newMsg: Msg) => {
        alert("Message sent! Thanks for you feedback.")
        this.msgs.push(newMsg);
        this.msg=new Msg();
      },
      (error: any) => {
        console.error('Error adding msg:', error);
      }
    );
}

}
