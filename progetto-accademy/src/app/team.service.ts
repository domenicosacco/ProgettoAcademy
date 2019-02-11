import { Injectable } from '@angular/core';
import {Match} from './models/match';
import {Player} from './models/player';
import {Team} from './models/team';

@Injectable({
  providedIn: 'root'
})

export class TeamService {

  tm: Team;

  pls : Player[];

  constructor() { }

  getTeamDetails(idTeam: string) : Team { 


    return this.tm;

  }

  getPlayersofTeam(idTeam: string) : Player[] {

    
    return this.pls;
    
  }

}
