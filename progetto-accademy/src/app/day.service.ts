import { Injectable } from '@angular/core';
import {DailyMatch} from './models/dailyMatch';
import { Match } from './models/match';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  daysChampionship : DailyMatch[];
  day: DailyMatch;


  constructor() { }

  getDaysofChampionship(championshipID: string) : DailyMatch[] {
    console.log("called service getDaysofChampionship")
    this.daysChampionship=[new DailyMatch(1,"Serie A",[new Match("Napoli","Juve","id: 1","id: 10"
    ,"id match: 1","ultimo aggiornamento: 10/02/2019",1,3,1,"Tier 1","FINISH","giocata il: 29/10/2018"),
     new Match("Inter","Milan","id: 2","id: 20"
     ,"id match: 2","ultimo aggiornamento: 10/02/2019",1,3,2,"Tier 1","FINISH","giocata il: 300/10/2018")]),new DailyMatch(2,"Serie A",[new Match("Napoli","Juve","id: 1","id: 10"
     ,"id match: 1","ultimo aggiornamento: 10/02/2019",1,3,1,"Tier 1","FINISH","giocata il: 29/10/2018"),
      new Match("Inter","Milan","id: 2","id: 20"
      ,"id match: 2","ultimo aggiornamento: 10/02/2019",1,3,2,"Tier 1","FINISH","giocata il: 300/10/2018")]),new DailyMatch(3,"Serie A",[new Match("Napoli","Juve","id: 1","id: 10"
      ,"id match: 1","ultimo aggiornamento: 10/02/2019",1,3,1,"Tier 1","FINISH","giocata il: 29/10/2018"),
       new Match("Inter","Milan","id: 2","id: 20"
       ,"id match: 2","ultimo aggiornamento: 10/02/2019",1,3,2,"Tier 1","FINISH","giocata il: 300/10/2018")])];

    return this.daysChampionship;
  }

  getDayDetails(dayID: number) : DailyMatch {
    console.log("called service getDayDetails");
    this.day= new DailyMatch(2,"2",[new Match("Napoli","Juve","id: 1","id: 10"
    ,"id match: 1","ultimo aggiornamento: 10/02/2019",1,3,1,"Tier 1","FINISH","giocata il: 29/10/2018"), 
    new Match("Inter","Milan","id: 2","id: 20"
    ,"id match: 2","ultimo aggiornamento: 10/02/2019",1,3,2,"Tier 1","FINISH","giocata il: 300/10/2018")]);
    return this.day;
  }
}
