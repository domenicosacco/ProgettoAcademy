import { Injectable } from '@angular/core';
import {Match} from './models/match';
import {Player} from './models/player';
import {Team} from './models/team';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TeamService {

  tm: Team;

  BASE_URL= "http://api.football-data.org/v2/teams/";
  header = new HttpHeaders({'X-Auth-Token':'aa89ef54a73b4df6a2e389906426b90b'});
  
  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  getTeamDetails(idTeam: string) : Observable<Team> { 

    const id = this.route.snapshot.paramMap.get('id');

    const url = this.BASE_URL + idTeam;

    return this.http.get(url, {headers : this.header}).pipe(map((response: any) => {
      console.log(response);
      return response;
    }));
  }

  }

