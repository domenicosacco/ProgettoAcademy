import { Component, OnInit } from '@angular/core';
import { DailyMatch } from '../models/dailyMatch';
import {DayService} from '../day.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {

  days: DailyMatch[];

  constructor(private route: ActivatedRoute,private dayService: DayService) { }

  ngOnInit() {
    this.getdays();
  }

  getdays(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.days=this.dayService.getDaysofChampionship(id);
  }

}
