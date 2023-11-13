import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stats } from 'src/app/models/stats';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private endpoint = environment.API_URL + '/stats'; // Correct the endpoint URL to '/orders'

  constructor(private http: HttpClient) { }

  getInsights(): Observable<Stats> {
    return this.http.get<Stats>(this.endpoint);
  }

}
