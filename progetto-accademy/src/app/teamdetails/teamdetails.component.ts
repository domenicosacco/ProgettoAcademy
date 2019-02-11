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
    this.getTeamDetails();
  }

  getTeamDetails() : void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.teamService.getTeamDetails(id).subscribe(
      data => {

        this.tm=new Team();

        
        this.tm.address=data['address'];
        this.tm.clubColor=data['clubColors'];
        this.tm.crustUrl=data['crestUrl'];
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
    
  }

