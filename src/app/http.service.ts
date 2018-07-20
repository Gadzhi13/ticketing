import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITicket } from './iticket';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  imported: boolean = false;
  dataBuffer: ITicket[] = [];
  private url:string = 'http://localhost:5433';

  httpParams = { headers: {'Access-Control-Allow-Origin': '*'}, responseType: 'text' };

  constructor(private http: HttpClient) { }

  login(userData): Observable<string> {
    return this.http.post(this.url, userData, {headers: {'Access-Control-Allow-Origin': '*'}, responseType: 'text'});
  }

  addTicketToDb(ticket: ITicket): Observable<any> {
    let tickets = {'isTicket': true, 'data': ticket};
    return this.http.post(this.url, tickets, {headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}, responseType: 'text'});
  }

  getTickets(): Observable<ITicket[]> {
    if (this.imported) {
      return of(this.dataBuffer);      
    } else {
      this.imported = true;
      return this.http.get<ITicket[]>(this.url, {headers: {'Access-Control-Allow-Origin': '*'}});
    }
  }
}
