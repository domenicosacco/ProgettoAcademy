import { Injectable } from '@angular/core';
import { Match } from './models/match'
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SafeDelay } from './models/SafeDelay';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  mchs : Match[] = [];

  match: Match;

  BASE_URL= "http://api.football-data.org/v2/matches/";
  header = new HttpHeaders({'X-Auth-Token':'aa89ef54a73b4df6a2e389906426b90b'});

  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  getMatchDetails(idMatch:string) : Observable<Match> {
    
    const id = this.route.snapshot.paramMap.get('id');

      const url = this.BASE_URL + idMatch;


      return this.http.get(url, {headers : this.header}).pipe(map((response: any) => {
        return response;
      }));
    }

  }

  

