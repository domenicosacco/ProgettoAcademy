import { Injectable } from '@angular/core';
import {Match} from './models/match';
import {Player} from './models/player';
import {Team} from './models/team';

@Injectable({
  providedIn: 'root'
})

export class TeamService {

  tm: Team=new Team("IT","via Partipilo","light blue","url scudetto","@gmail",1995,"id: 1",
                    "SSC Napoli","3339567765","Napoli",[],"NPL","San Paolo","www.scnapoli.carileo",[]);

                    pls : Player[]=[new Player("Pucariello","1","AT","09/04/1995",10,"Campobasso"), new Player("Sacco","2","ATT","30/12/1994",10,"Foggia")];
  constructor() { }

  getTeamDetails(idTeam: string) : Team { 

    console.log("servizio getTeamDetails chiamato");
    return this.tm;

  }

  getPlayersofTeam(idTeam: string) : Player[] {

    console.log("chiamato servizio getPlayersofTeam()");
    return this.pls;
    
  }

}
