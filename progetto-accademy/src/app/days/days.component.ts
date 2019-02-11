import { Component, OnInit } from '@angular/core';
import { DailyMatch } from '../models/dailyMatch';
import {DayService} from '../day.service';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../models/match';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {

  days: DailyMatch[]=[];
  sortedDays=[];

  matches= [];

  constructor(private route: ActivatedRoute,private dayService: DayService) { }

  ngOnInit() {
    this.getdays();
  }

  getdays(): void {
    //const id = this.route.snapshot.paramMap.get('id');
    this.dayService.getDaysofChampionships().subscribe(
      data => {

          for(let match in data['matches']) {
          
          let day=new DailyMatch();
          day.matches=[];
          console.log(data['matches'][match].matchday);

          let matchToPut = new Match();

          matchToPut.id = data['matches'][match].id,
          matchToPut.homeTeamName=data['matches'][match].homeTeamName,
          matchToPut.awayTeamName=data['matches'][match].awayTeamName,
          matchToPut.homeTeamID=data['matches'][match].homeTeamID,
          matchToPut.awayTeamID=data['matches'][match].awayTeamID,
          matchToPut.homeTeamScore=data['matches'][match].homeTeamScore,
          matchToPut.awayTeamScore=data['matches'][match].awayTeamScore,
          matchToPut.utcDate=data['matches'][match].utcDate,
          matchToPut.status=data['matches'][match].status,
          matchToPut.stage=data['matches'][match].stage,
          matchToPut.lastUpdated=data['matches'][match].lastUpdated,
          matchToPut.matchDay=data['matches'][match].matchday

          day.matches.push(matchToPut);
          day.competitionName=data['competition'].name;
          day.dayOfMatch=data['matches'][match].matchday;

          console.log(day.dayOfMatch);

          this.days.push(day);

        }

        /*for(let day of this.days) {
          let aDay= new DailyMatch();

          aDay.competitionName=day.competitionName;
          aDay.dayOfMatch=day.dayOfMatch
          aDay.matches=[];

          for(let day2 of this.days) {
            if(day.dayOfMatch===day2.dayOfMatch && !aDay.matches.includes(day2.matches[0])) {
              aDay.matches.push(day2.matches[0]);
            }
          }

          console.log('New day number: ' + aDay.dayOfMatch);
          this.sortedDays.push(aDay);

        }*/


        var mergedObj = this.days.reduce((acc, obj) => {
          if (acc[obj.dayOfMatch]) {
             acc[obj.dayOfMatch].matches = acc[obj.dayOfMatch].matches.isArray ? 
             acc[obj.dayOfMatch].matches.concat(obj.matches) : 
             [acc[obj.dayOfMatch].matches].concat(obj.matches);
      
          } else {
            acc[obj.dayOfMatch] = obj;
          }
      
          return acc;
      }, {});
      
      for (let prop in mergedObj) {
        this.sortedDays.push(mergedObj[prop]) 
      }


      },
      error=> console.log(error)
    )
  }

}
