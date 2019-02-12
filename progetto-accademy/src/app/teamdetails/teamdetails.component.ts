import { Component, OnInit } from '@angular/core';
import {Team} from '../models/team';
import {TeamService} from '../team.service';
import { Player } from '../models/player';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../models/match';

@Component({
  selector: 'app-teamdetails',
  templateUrl: './teamdetails.component.html',
  styleUrls: ['./teamdetails.component.css']
})
export class TeamdetailsComponent implements OnInit {

  tm: Team;
  players: Player[];
  matches: Match[];
  mtch: Match;
  victoriesHome: number=0;
  defeatsHome: number=0;
  drawsHome: number=0;
  victoriesAway: number=0;
  defeatsAway: number=0;
  drawsAway: number=0;

  constructor(private route: ActivatedRoute,private teamService: TeamService) { }

  ngOnInit() {
    this.getTeamDetails();
    this.getTeamMatches();
  }

  getTeamDetails() : void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.teamService.getTeamDetails(id).subscribe(
      data => {

        this.tm=new Team();

        
        this.tm.address=data['address'];
        this.tm.clubColor=data['clubColors'];
        this.tm.crustUrl=String(data['crestUrl']);
        console.log(String(data['crestUrl']));
        this.tm.area=data['area']['name'];
        this.tm.mail=data['email']
        this.tm.foundedYear=data['founded'];
        this.tm.idTeam=data['id'];
        this.tm.name=data['name'];
        this.tm.phone=data['phone'];
        this.tm.shortName=data['shortName'];
        this.tm.tla=data['tla'];
        this.tm.venue=data['venue'];
        this.tm.webSite=data['website'];
        this.tm.players=[];

        for(let player in data['squad']) {

          let playerToPut = new Player();
          playerToPut.id=data['squad'][player]['id'];
          playerToPut.name=data['squad'][player]['name'];
          playerToPut.position=data['squad'][player]['position'];
          playerToPut.shirtNumber=data['squad'][player]['shirtNumber'];
          playerToPut.countryOfBirth=data['squad'][player]['countryOfBirth'];
          console.log("putting player with id " + data['squad'][player]['id']);
          this.tm.players.push(playerToPut);
        }

  },
  error=> console.log(error)
    )}

    getTeamMatches() : void {
      const id = this.route.snapshot.paramMap.get('id');
      
      this.teamService.getTeamMatches(id).subscribe(
        data => {
  
          this.matches= [];
  
          console.log("----------------" + data['matches'].match);

          for(let match in data['matches']) {
            this.mtch =new Match();
            this.mtch.id = data['matches'][match]['id'];
            console.log("----------------" + data['matches'][match]['id']);
            this.mtch.homeTeamName=data['matches'][match]['homeTeam']['name'];
            this.mtch.awayTeamName=data['matches'][match]['awayTeam']['name'];
            this.mtch.homeTeamID=data['matches'][match]['homeTeam']['id'];
            this.mtch.awayTeamID=data['matches'][match]['awayTeam']['id'];
            this.mtch.homeTeamScore=data['matches'][match]['score']['fullTime']['homeTeam'];
            this.mtch.awayTeamScore=data['matches'][match]['score']['fullTime']['awayTeam'];
            this.mtch.utcDate=data['matches'][match]['utcDate'];
            this.mtch.status=data['matches'][match]['status'];
            this.mtch.stage=data['matches'][match]['stage'];
            this.mtch.lastUpdated=data['matches'][match]['lastUpdated'];
            this.mtch.matchDay=data['matches'][match]['matchday'];
            this.matches.push(this.mtch);

          }

          this.mtch=new Match();

          for(let mtch of this.matches) {
            console.log(this.tm.name.toLowerCase().trim() + " " + mtch.homeTeamName.toLowerCase().trim());
            if(mtch.stage == "REGULAR_SEASON" && mtch.homeTeamScore!= null && mtch.awayTeamScore!= null) {

            if(this.tm.name.toLowerCase().trim() == mtch.homeTeamName.toLowerCase().trim()) {
                if(mtch.homeTeamScore>mtch.awayTeamScore) {this.victoriesHome++;}
                else if (mtch.homeTeamScore<mtch.awayTeamScore) {this.defeatsHome++;}
                else if (mtch.homeTeamScore==mtch.awayTeamScore) {this.drawsHome++;}
            }

            else {
              if(mtch.homeTeamScore<mtch.awayTeamScore) {this.victoriesAway++;}
              else if (mtch.homeTeamScore>mtch.awayTeamScore) {this.defeatsAway++;}
              else if (mtch.homeTeamScore==mtch.awayTeamScore) {this.drawsAway++;}
            }
          }
        }

          
  
    },
    error=> console.log(error)
      )}
    
  }

