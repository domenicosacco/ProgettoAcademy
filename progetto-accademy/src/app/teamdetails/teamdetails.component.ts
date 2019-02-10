import { Component, OnInit } from '@angular/core';
import {Team} from '../models/team';
import {TeamService} from '../team.service';
import { Player } from '../models/player';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-teamdetails',
  templateUrl: './teamdetails.component.html',
  styleUrls: ['./teamdetails.component.css']
})
export class TeamdetailsComponent implements OnInit {

  tm: Team;
  players: Player[];

  constructor(private route: ActivatedRoute,private teamService: TeamService) { }

  ngOnInit() {
    this.getTeamDetails("1");
    this.getPlayersOfTeam("1");
  }

  getTeamDetails(idTeam: string) : void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tm=this.teamService.getTeamDetails(id);
    
  }

  getPlayersOfTeam(idTeam: string) : void {
    const id = this.route.snapshot.paramMap.get('id');
    this.players=this.teamService.getPlayersofTeam(id);
  }

}
