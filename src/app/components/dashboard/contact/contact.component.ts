import { Component, OnInit } from '@angular/core';
import { Msg } from 'src/app/models/msg';
import { MsgService } from 'src/app/services/msg/msg.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  msgs: Msg[]=[];

  constructor(private msgService: MsgService) { }

  ngOnInit(): void {
    this.msgService.findAll().toPromise()
    .then(data => this.msgs=data)
    .catch(err => console.log)

  }






  
}