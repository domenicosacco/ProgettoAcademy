import { Component, OnInit, Input } from '@angular/core';
import {DailyMatch} from '../models/dailyMatch';
import {DayService} from '../day.service';

@Component({
  selector: 'app-daydetail',
  templateUrl: './daydetail.component.html',
  styleUrls: ['./daydetail.component.css']
})
export class DaydetailComponent implements OnInit {

  @Input() 
  day: DailyMatch;

  constructor(private dayService: DayService) { }

  ngOnInit() {
    this.getDayDetails();
  }

  getDayDetails(): void {
    this.day=this.dayService.getDayDetails(1);
  }

}
