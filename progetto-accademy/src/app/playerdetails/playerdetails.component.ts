import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrls: ['./playerdetails.component.css']
})
export class PlayerdetailsComponent implements OnInit {

  @Input()
  player: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayerDetails("1");
  }

  getPlayerDetails(idPlayer: string) : void {
    this.player=this.playerService.getPlayerDetails("1");
  }
}
