import { Injectable } from '@angular/core';
import { Team } from './models/team';
import { Player } from './models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  pl : Player;
  constructor() { }

  getPlayerDetails(idPlayer: string) : Player {

    this.pl = new Player("Nome player con id" + idPlayer,idPlayer,"AT","09/04/1995",10,"Campobasso");
    console.log("chiamato servizio getPLayerDetails()");
    return this.pl;

  }

 

}
