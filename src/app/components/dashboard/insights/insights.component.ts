import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js'
import { StatsService } from 'src/app/services/stats/stats.service';

Chart.register(...registerables)

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {


  public salesChart: any;
  public ordersChart: any;
  stats = [
    {
      name: 'Orders',
      value: 357451,
      percentage: 1,
    },
    {
      name: 'Clients',
      value: 2514,
      percentage: -3.45,
    },
    {
      name: 'Sales',
      value: 924,
      percentage: -1.1,
    },
    {
      name: 'Products',
      value: 49,
      percentage: 12,
    }
  ]

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
    this.statsService.getInsights().toPromise()
    .then(data => {
      this.stats[0].value = data.orders
      this.stats[1].value = data.users
      this.stats[3].value = data.products
      this.createOrdersChart();
      this.createSalesChart();
    })
    .catch(err => console.log)
  }

  createOrdersChart(){
    this.ordersChart = new Chart("ordersChart", {
      type: 'doughnut', //this denotes tha type of chart
      data: {
        labels: [
          'On-going',
          'Closed',
          'In progress'
        ],
        datasets: [{
          label: 'Orders status',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(98, 241, 82)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        aspectRatio:2.5
      }   
    });
  }

  createSalesChart(){
    this.salesChart = new Chart("salesChart", {
      type: 'line', //this denotes tha type of chart
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul'],
        datasets: [{
          label: 'Sales tracking',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
          backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }]
      }  
    });
  }

}
