import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSlider } from '@angular/material/slider';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gridsize: number = 30;
  monthlyExpensesize:number = 30;
  updateSetting(event) {
    this.gridsize = event.value;
  }

  updateMonthlyExpenseSize(event){
    this.monthlyExpensesize = event.value;
  }

  constructor() { }

  ngOnInit(): void {
  }
  
}
