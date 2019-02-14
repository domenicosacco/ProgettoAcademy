import { Component, OnInit } from '@angular/core';
import { SeasoninfoService } from '../seasoninfo.service';
import { SafeDelay } from '../models/SafeDelay';
import { SeasonInfo } from '../models/seasoninfo';
import { seasonPosition } from '../models/seasonPosition';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-seasoninfo',
  templateUrl: './seasoninfo.component.html',
  styleUrls: ['./seasoninfo.component.css']
})
export class SeasoninfoComponent implements OnInit {

  constructor(private route: ActivatedRoute,private seasonService: SeasoninfoService) { }

  champ:string;

  season: SeasonInfo;
  ngOnInit() {
    //SafeDelay.delay(500);
    
    this.getSeasonDetails();
  }

  getParamValueQueryString() {
    const url = window.location.href;
    let paramValue=url.substring(url.indexOf("daystable/")+10);
    
    console.log(paramValue);
    return paramValue;
  }
  
  getSeasonDetails() : void {
    
    this.champ= this.getParamValueQueryString();

    console.log("link to d: " + this.champ);

    this.seasonService.getSeason(this.champ).subscribe(
      data => {

        this.season=new SeasonInfo();
        console.log("----333333" + data['season']);

       
        this.season.startDate=data['season']['startDate'];
        this.season.endDate=data['season']['endDate'];
        this.season.id=data['season']['id'];
        this.season.winner=data['season']['winner'];
        this.season.currentMatchday=data['season']['currentMatchday'];
        this.season.name=data['competition']['name'];

        this.season.classification=[];

        console.log("----" + data['standings']['0']['table']);

        for (let seasonTeam of data['standings']['0']['table']) {
          let posInfo : seasonPosition=new seasonPosition();

          console.log("----" + seasonTeam['position']);
          posInfo.draw=seasonTeam['draw'];
          posInfo.goalDifference=seasonTeam['goalDifference'];
          posInfo.goalsAgainst=seasonTeam['goalsAgainst'];
          posInfo.goalsFor=seasonTeam['goalsFor'];
          posInfo.lost=seasonTeam['lost'];
          posInfo.playedGames=seasonTeam['playedGames'];
          posInfo.points=seasonTeam['points'];
          posInfo.position=seasonTeam['position'];
          posInfo.teamCrestUrl=seasonTeam['team']['crestUrl'];
          posInfo.teamName=seasonTeam['team']['name'];
          posInfo.won=seasonTeam['won'];
          posInfo.teamID=seasonTeam['team']['id'];



          this.season.classification.push(posInfo);
        }

  },
  error=> console.log(error)
    )} 

}
