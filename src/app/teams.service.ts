import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http:HttpClient) { }

  fetchTeams(): Observable<any> {
    return this.http.get('https://statsapi.web.nhl.com/api/v1/teams');
  }
}
