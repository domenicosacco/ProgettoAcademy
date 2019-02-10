import { Component, OnInit } from '@angular/core';
import {Team} from '../models/team';
import {TeamService} from '../team.service';
import { Player } from '../models/player';
@Component({
  selector: 'app-teamdetails',
  templateUrl: './teamdetails.component.html',
  styleUrls: ['./teamdetails.component.css']
})
export class TeamdetailsComponent implements OnInit {

  tm: Team;
  players: Player[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeamDetails("1");
    this.getPlayersOfTeam("1");
  }

  getTeamDetails(idTeam: string) : void {
    this.tm=this.teamService.getTeamDetails("1");
    
  }

  getPlayersOfTeam(idTeam: string) : void {
    this.players=this.teamService.getPlayersofTeam("1");
  }

}
