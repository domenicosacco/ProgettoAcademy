import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import {DailyMatch} from '../models/dailyMatch';
import {DayService} from '../day.service';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../models/match';

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
    const champ = this.route.snapshot.paramMap.get('champ');

    this.dayService.getDayDetails(id,champ).subscribe(
      data => {

        this.day=new DailyMatch();
        this.day.competitionName=data['competition'].name;
        this.day.matches=[];

          for(let match in data['matches']) {

          let matchToPut = new Match();

          matchToPut.id = data['matches'][match].id,
          matchToPut.homeTeamName=data['matches'][match]['homeTeam'].name,
          matchToPut.awayTeamName=data['matches'][match]['awayTeam'].name,
          matchToPut.homeTeamID=data['matches'][match]['homeTeam'].id,
          matchToPut.awayTeamID=data['matches'][match]['awayTeam'].id,
          matchToPut.homeTeamScore=data['matches'][match]['score']['fullTime']['homeTeam'],
          matchToPut.awayTeamScore=data['matches'][match]['score']['fullTime']['awayTeam'],
          matchToPut.utcDate=data['matches'][match].utcDate;
          let date=matchToPut.utcDate.substring(0,matchToPut.utcDate.indexOf("T"));
          matchToPut.utcDate=date + " " + matchToPut.utcDate.substring(matchToPut.utcDate.indexOf("T")+1,matchToPut.utcDate.indexOf("Z")-3);
          matchToPut.status=data['matches'][match].status,
          matchToPut.stage=data['matches'][match].stage,
          matchToPut.lastUpdated=data['matches'][match].lastUpdated,
          matchToPut.matchDay=data['matches'][match]['matchday'];

          this.day.matches.push(matchToPut);
          this.day.dayOfMatch=data['matches'][match]['matchday'];

          console.log(this.day.dayOfMatch);

        }

  },
  error=> console.log(error)
    )}


  }
