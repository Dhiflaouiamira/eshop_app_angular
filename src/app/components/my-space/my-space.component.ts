import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'src/app/models/page';

@Component({
  selector: 'app-my-space',
  templateUrl: './my-space.component.html',
  styleUrls: ['./my-space.component.scss']
})
export class MySpaceComponent implements OnInit {


  cliPages: Page[] = [


    {
      name: 'Achats',
      icon: 'assets/images/megaphone.svg',
      path: 'achats',
      isActive: true
    },
    {
      name: 'Selection',
      icon: 'assets/images/megaphone.svg',
      path: 'selection',
      isActive: false
    },
    {
      name: 'Profil',
      icon: 'assets/images/graph.svg',
      path: 'profil',
      isActive: false
    },
    
    
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.cliPages)
  
  }

  openTab(i: number) {
    for (let count = 0; count < this.cliPages.length; count++) {
      this.cliPages[count].isActive = false;
    }
    this.cliPages[i].isActive = true;
  }

}