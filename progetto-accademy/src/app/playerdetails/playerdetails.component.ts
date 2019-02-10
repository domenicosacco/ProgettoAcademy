import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../player.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrls: ['./playerdetails.component.css']
})
export class PlayerdetailsComponent implements OnInit {

  @Input()
  player: Player;

  constructor(private route: ActivatedRoute,private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayerDetails();
  }

  getPlayerDetails() : void {
    const id = this.route.snapshot.paramMap.get('id');
    this.player=this.playerService.getPlayerDetails(id);
  }
}
