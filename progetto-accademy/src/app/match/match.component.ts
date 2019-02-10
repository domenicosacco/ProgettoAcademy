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
    this.getMatches();
  }

  getMatches(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.match = this.matchService.getMatchDetails(id);
  }

}
