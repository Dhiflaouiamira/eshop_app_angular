
  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { environment } from 'src/environments/environment';
  import { Observable } from 'rxjs';
import { Msg } from 'src/app/models/msg';
  
  @Injectable({
    providedIn: 'root'
  })
  export class MsgService {
    private endpoint = environment.API_URL + '/messages'; // Correct the endpoint URL to '/msgs'
  
    constructor(private http: HttpClient) { }
  
    findAll(): Observable<Msg[]> {
      return this.http.get<Msg[]>(this.endpoint);
    }
  
    addmsg(msg: Msg): Observable<Msg> {
      delete msg._id
      return this.http.post<Msg>(this.endpoint, msg);
    }
  
    updatemsg(msg: Msg): Observable<Msg> {
      return this.http.put<Msg>(`${this.endpoint}/${msg._id}`, msg);
    }
  
    deletemsg(msgId: string): Observable<any> {
      return this.http.delete(`${this.endpoint}/${msgId}`);
    }
  
    // Remove this method as it is a duplicate
    // getmsgs(): Observable<any[]> {
    //   return this.http.get<any[]>(`${this.apiUrl}/msgs`);
    // }
  
    getmsgsByClientId(clientId: string): Observable<Msg[]> {
      return this.http.get<Msg[]>(`${this.endpoint}?client=${clientId}`); // Correct the endpoint URL to '/clients'
    }
    getmsgs(): Observable<any[]> { // Add back the getmsgs method
      return this.http.get<any[]>(this.endpoint);
    }
  }
  
