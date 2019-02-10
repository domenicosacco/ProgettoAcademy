import { Injectable } from '@angular/core';
import { Team } from './models/team';
import { Player } from './models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  pl : Player = new Player("Pucariello","id: 1","AT","09/04/1995",10,"Campobasso");

 

  constructor() { }

  getPlayerDetails(idPlayer: string) : Player {

    console.log("chiamato servizio getPLayerDetails()");
    return this.pl;

  }

 

}
