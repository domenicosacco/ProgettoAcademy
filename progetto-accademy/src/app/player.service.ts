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

    console.log("chiamato servizio getPLayerDetails()");
    return this.pl;

  }

 

}
