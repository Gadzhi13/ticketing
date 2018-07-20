import { Injectable, OnInit } from '@angular/core';
import { TsysTableDataSource } from './tsys-table/tsys-table-datasource';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class TicketFinderService implements OnInit {

  private dataSource: TsysTableDataSource;

  constructor(private http: HttpService) {
    this.dataSource = new TsysTableDataSource(this.http);
  }

  findById(id: string) {
    return this.dataSource.data.find((ticket) => {return ticket.id == id});
  }

  ngOnInit(): void {}
}
