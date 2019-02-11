import { Injectable } from '@angular/core';
import { Match } from './models/match'
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MatchService {

  mchs : Match[] = [];

  match: Match;

  constructor(private route: ActivatedRoute) { }

  getMatchDetails(idMatch:string) : Match {
    
    const id = this.route.snapshot.paramMap.get('id');
    
    return this.match;

  }

  getMatchesOfDay(idDay: string) : Match[] {
    
    console.log("called service getMatchesOfDay");
    
    return this.mchs;
    
  }
}
