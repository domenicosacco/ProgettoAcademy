import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../player.service';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../models/match';

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
    
    this.playerService.getPlayerDetails(id).subscribe(
      data => {

        this.player=new Player();
        this.player.id=data['id'];
        this.player.countryOfBirth=data['countryOfBirth'];
        this.player.name=data['name'];
        this.player.position=data['position'];
        data['shirtNumber'] == null? this.player.shirtNumber="N/A" : this.player.shirtNumber=data['shirtNumber'];
        this.player.dateOfBirth=data['dateOfBirth'];
        console.log(data['shirtNumber']);
        console.log(data['dateOfBirth']);

  },
  error=> console.log(error)
    )} 


  }

