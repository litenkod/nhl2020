import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamDetailService {

  constructor(private http:HttpClient) { }

  fetchTeamDetails(TEAM_ID:string): Observable<any> {
    return this.http.get(`https://statsapi.web.nhl.com/api/v1/teams/${TEAM_ID}?expand=team.roster`);
  }
}
