import { Injectable } from '@angular/core';
import { Match } from './models/match'
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MatchService {

  mchs : Match[] = [];

  match: Match = new Match("Napoli","Juve","1","10"
                          ,"1","ultimo aggiornamento: 10/02/2019",1,3,1,"Tier 1","FINISH","giocata il: 29/10/2018");

  constructor(private route: ActivatedRoute) { }

  getMatchDetails(idMatch:string) : Match {
    
    const id = this.route.snapshot.paramMap.get('id');
    this.match = new Match("Napoli","Juve","1","10"
                          ,idMatch,"ultimo aggiornamento: 10/02/2019",1,3,1,"Tier 1","FINISH","giocata il: 29/10/2018");
    return this.match;

  }

  getMatchesOfDay(idDay: string) : Match[] {
    
    console.log("called service getMatchesOfDay");
    this.mchs=[new Match("Napoli","Juve","1","10"
    ,"1","ultimo aggiornamento: 10/02/2019",1,3,1,"Tier 1","FINISH","giocata il: 29/10/2018"),
     new Match("Inter","Milan","2","20"
     ,"2","ultimo aggiornamento: 10/02/2019",1,3,2,"Tier 1","FINISH","giocata il: 300/10/2018")];
    return this.mchs;
    
  }
}
