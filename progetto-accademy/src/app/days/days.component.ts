import { Component, OnInit } from '@angular/core';
import { DailyMatch } from '../models/dailyMatch';
import {DayService} from '../day.service';
@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {

  days: DailyMatch[];

  constructor(private dayService: DayService) { }

  ngOnInit() {
    this.getdays();
  }

  getdays(): void {
    this.days=this.dayService.getDaysofChampionship("1");
  }

}
