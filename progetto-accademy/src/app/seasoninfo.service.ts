import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeasonInfo } from './models/seasoninfo';


@Injectable({
  providedIn: 'root'
})
export class SeasoninfoService {

  BASE_URL= "http://api.football-data.org/v2/competitions/2019/standings";
  header = new HttpHeaders({'X-Auth-Token':'aa89ef54a73b4df6a2e389906426b90b'});

  constructor(private http: HttpClient) { }

  getSeason() : Observable<SeasonInfo> {
      let url = this.BASE_URL;
      return this.http.get(url, {headers : this.header}).pipe(map((response: any) => {
        return response;
      }));
    }


}
