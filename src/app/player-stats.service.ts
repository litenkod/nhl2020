import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerStatsService {

  constructor(private http:HttpClient) { }

  fetchPlayerStats(PLAYER_ID:string): Observable<any> {
    return this.http.get(`https://statsapi.web.nhl.com/api/v1/people/${PLAYER_ID}/stats?stats=statsSingleSeason&season=20192020`);
  }
}
