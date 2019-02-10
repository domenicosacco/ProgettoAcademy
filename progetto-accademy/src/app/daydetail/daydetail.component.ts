import { Component, OnInit, Input } from '@angular/core';
import {DailyMatch} from '../models/dailyMatch';
import {DayService} from '../day.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daydetail',
  templateUrl: './daydetail.component.html',
  styleUrls: ['./daydetail.component.css']
})
export class DaydetailComponent implements OnInit {

  @Input() 
  day: DailyMatch;

  constructor(private route: ActivatedRoute,private dayService: DayService) { }

  ngOnInit() {
    this.getDayDetails();
  }

  getDayDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.day=this.dayService.getDayDetails(id);
  }

}
