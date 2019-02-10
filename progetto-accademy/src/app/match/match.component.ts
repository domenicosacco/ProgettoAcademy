import { Component, OnInit, Input } from '@angular/core';
import {Match} from '../models/match';
import {MatchService} from '../match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})

export class MatchComponent implements OnInit {

  matches: Match[];

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.getMatches();
  }

  getMatches(): void {
    this.matches = this.matchService.getMatchesOfDay("1");
  }

}
