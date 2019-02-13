import { Component, OnInit } from '@angular/core';
import { DailyMatch } from '../models/dailyMatch';
import {DayService} from '../day.service';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../models/match';
import { max } from 'rxjs/operators';
import { SafeDelay } from '../models/SafeDelay';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {

  days: DailyMatch[]=[];
  sortedDays: DailyMatch[] =[];

  matches= [];

  constructor(private route: ActivatedRoute,private dayService: DayService) { }

  ngOnInit() {
    SafeDelay.delay(500);
    this.getdays();
  }

  getdays(): void {
    //const id = this.route.snapshot.paramMap.get('id');
    this.dayService.getDaysofChampionships().subscribe(
      data => {

          for(let match in data['matches']) {
          
          let day=new DailyMatch();
          day.matches=[];
          //console.log(data['matches'][match].matchday);

          let matchToPut = new Match();

          matchToPut.id = data['matches'][match].id,
          matchToPut.homeTeamName=data['matches'][match]['homeTeam']['name'],
          matchToPut.awayTeamName=data['matches'][match]['awayTeam']['name'],
          matchToPut.homeTeamID=data['matches'][match]['homeTeam']['id'],
          matchToPut.awayTeamID=data['matches'][match]['awayTeam']['id'],
          matchToPut.homeTeamScore=data['matches'][match]['score']['fullTime']['homeTeam'],
          matchToPut.awayTeamScore=data['matches'][match]['score']['fullTime']['awayTeam'],
          matchToPut.utcDate=data['matches'][match].utcDate,
          matchToPut.status=data['matches'][match].status,
          matchToPut.stage=data['matches'][match].stage,
          matchToPut.lastUpdated=data['matches'][match].lastUpdated,
          matchToPut.matchDay=data['matches'][match].matchday

          day.matches.push(matchToPut);
          day.competitionName=data['competition'].name;
          day.dayOfMatch=data['matches'][match].matchday;

          //console.log(day.dayOfMatch);

          this.days.push(day);

        }
      
      let daysNumber=0;
      for(let i=0;i<this.days.length;i++) {
        let dayMatches=this.days[i].matches;
        for(let j=0;j<dayMatches.length;j++) {
          if(dayMatches[j].matchDay>daysNumber) {daysNumber=dayMatches[j].matchDay};
        }
      }

      for(let i=1;i<=daysNumber;i++) {
        let dayToPut=new DailyMatch();
        let matchesToAdd: Match[]=[];
         for(let day of this.days) {
           if (day.dayOfMatch==i) {dayToPut.competitionName=day.competitionName;
          dayToPut.dayOfMatch=day.dayOfMatch;
          for(let match of day.matches) {
            if(!matchesToAdd.includes(match)) {matchesToAdd.push(match);}
          }
          dayToPut.matches=matchesToAdd;
          }
         }
         this.sortedDays.push(dayToPut);
      }


      },
      error=> console.log(error)
    )
  }

}
