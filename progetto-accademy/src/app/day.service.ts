import { Injectable } from '@angular/core';
import {DailyMatch} from './models/dailyMatch';
import { Match } from './models/match';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SafeDelay } from './models/SafeDelay';


@Injectable({
  providedIn: 'root'
})
export class DayService {

  daysChampionship : DailyMatch[];
  day: DailyMatch;
  BASE_URL : string = "http://api.football-data.org/v2/competitions/2019";
  header = new HttpHeaders({'X-Auth-Token':'aa89ef54a73b4df6a2e389906426b90b'});

  constructor(private http: HttpClient) { }


    getDaysofChampionships() : Observable<DailyMatch[]>{
      const url = this.BASE_URL + '/matches';

      return this.http.get(url, {headers : this.header}).pipe(map((response: any[]) => {
        return response;
      }));
  }

  getDayDetails(dayID: number) : Observable<DailyMatch> {
    console.log("called service getDayDetails");
    const url = this.BASE_URL + '/matches?matchday=' + dayID;

    return this.http.get(url, {headers : this.header}).pipe(map((response: any) => {
      return response;
    }));
  }
}
