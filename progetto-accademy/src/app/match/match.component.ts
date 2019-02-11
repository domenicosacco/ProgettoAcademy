import { Component, OnInit, Input } from '@angular/core';
import {Match} from '../models/match';
import {MatchService} from '../match.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})

export class MatchComponent implements OnInit {


  match: Match;

  constructor(private route: ActivatedRoute,private matchService: MatchService) { }

  ngOnInit() {
    this.getMatchDetails();
  }

  getMatchDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    

    this.matchService.getMatchDetails(id).subscribe(
      data => {

          this.match=new Match();
          console.log(data['match']['homeTeam'].id);
          this.match.id = data['match'].id,
          this.match.homeTeamName=data['match']['homeTeam'].name,
          this.match.awayTeamName=data['match']['awayTeam'].name,
          this.match.homeTeamID=data['match']['homeTeam'].id,
          this.match.awayTeamID=data['match']['awayTeam'].id,
          this.match.homeTeamScore=data['match']['score']['fullTime']['homeTeam'],
          this.match.awayTeamScore=data['match']['score']['fullTime']['awayTeam'],
          this.match.utcDate=data['match'].utcDate,
          this.match.status=data['match'].status,
          this.match.stage=data['match'].stage,
          this.match.lastUpdated=data['match'].lastUpdated,
          this.match.matchDay=data['match']['matchday'];

          

        },
  error=> console.log(error)
    )}
  }

