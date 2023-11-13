import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/models/page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  admPages: Page[] = [
    {
      name: 'Insight',
      icon: 'assets/images/graph.svg ',
      path: 'insights',
      isActive: true
    },
    {
      name: 'Promotions',
      icon: 'assets/images/megaphone.svg',
      path: 'promotions',
      isActive: false
    },
    {
      name: 'Orders',
      icon: 'assets/images/multi-select.svg',
      path: 'orders',
      isActive: false
    },
    {
      name: 'Products',
      icon: 'assets/images/multi-select.svg',
      path: 'products',
      isActive: false
    },
    {
      name: 'Clients',
      icon: 'assets/images/people.svg',
      path: 'orders',
      isActive: false
    },
    {
      name: 'Contact',
      icon: 'assets/images/people.svg',
      path: 'contact',
      isActive: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.admPages)
  }

  openTab(i: number) {
    for (let count = 0; count < this.admPages.length; count++) {
      this.admPages[count].isActive = false;
    }
    this.admPages[i].isActive = true;
  }

}