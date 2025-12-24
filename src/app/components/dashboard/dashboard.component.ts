import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  summary: any = { totalUsers: 154, totalProducts: 42, marketHealth: 'Growth' };
  userAnalysis: any[] = [{ role: 'Admin', count: 3 }, { role: 'User', count: 151 }];

  
  public profitChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{ 
      data: [1200, 1900, 1500, 2500, 2200, 3000], 
      label: 'Monthly Profit ($)', 
      borderColor: '#ffc107', 
      backgroundColor: 'rgba(255, 193, 7, 0.2)',
      fill: true,
      tension: 0.4
    }]
  };


  public costRevenueData: ChartData<'bar'> = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      { data: [5000, 7000, 6000, 8000], label: 'Revenue', backgroundColor: '#ffc107' },
      { data: [3200, 4100, 3800, 4900], label: 'Costs', backgroundColor: '#ff4d4d' }
    ]
  };

  public predictionChartData: ChartData<'line'> = {
    labels: ['Current', '+10% Sales', '+20% Sales', '+30% Sales'],
    datasets: [{ 
      data: [3000, 3600, 4500, 5800], 
      label: 'AI Predicted Profit', 
      borderDash: [5, 5], 
      borderColor: '#00d1b2',
      pointBackgroundColor: '#00d1b2'
    }]
  };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.calculatePredictions(); 
    this.fetchRealData();
  }

  calculatePredictions() {
    const currentSales = 3000;
    const growthRates = [1, 1.1, 1.2, 1.3];
    this.predictionChartData.datasets[0].data = growthRates.map(rate => currentSales * rate);

    this.predictionChartData = { ...this.predictionChartData };
  }

  fetchRealData() {
   
    this.dashboardService.getSummary().subscribe({
      next: (res: any) => { 
        if(res) {
          this.summary = res;
         
          this.profitChartData.datasets[0].data = [res.totalUsers * 5, res.totalProducts * 10, 1500, 2500, 2200, 3000];
          this.profitChartData = { ...this.profitChartData };
        }
      },
      error: () => console.log("Using default summary data")
    });

    this.dashboardService.getUserAnalysis().subscribe({
      next: (res: any) => { 
       
        this.userAnalysis = res as any[]; 
      },
      error: () => console.log("Using default analysis data")
    });
  }
}