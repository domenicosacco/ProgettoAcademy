import { Injectable } from '@angular/core';
import { Team } from './models/team';
import { Player } from './models/player';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from './models/match';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  BASE_URL= "http://api.football-data.org/v2/players/";
  header = new HttpHeaders({'X-Auth-Token':'aa89ef54a73b4df6a2e389906426b90b'});

  pl : Player;

  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  getPlayerDetails(idMatch:string) : Observable<Player> {
    
    const id = this.route.snapshot.paramMap.get('id');

      const url = this.BASE_URL + idMatch;

      return this.http.get(url, {headers : this.header}).pipe(map((response: any) => {
        return response;
      }));
    }

 

}
