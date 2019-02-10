import { Injectable } from '@angular/core';
import { Match } from './models/match'
@Injectable({
  providedIn: 'root'
})
export class MatchService {

  mchs : Match[] = [];

  match: Match = new Match("Napoli","Juve","id: 1","id: 10"
                          ,"id match: 1","ultimo aggiornamento: 10/02/2019",1,3,1,"Tier 1","FINISH","giocata il: 29/10/2018");

  constructor() { }

  getMatchDetails(idMatch: string) : Match {
    
    console.log("called service getMatchDetails");
    return this.match;

  }

  getMatchesOfDay(idDay: string) : Match[] {
    
    console.log("called service getMatchesOfDay");
    this.mchs=[new Match("Napoli","Juve","id: 1","id: 10"
    ,"id match: 1","ultimo aggiornamento: 10/02/2019",1,3,1,"Tier 1","FINISH","giocata il: 29/10/2018"),
     new Match("Inter","Milan","id: 2","id: 20"
     ,"id match: 2","ultimo aggiornamento: 10/02/2019",1,3,2,"Tier 1","FINISH","giocata il: 300/10/2018")];
    return this.mchs;
    
  }
}
