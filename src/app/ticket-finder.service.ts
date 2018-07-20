import { Injectable, OnInit } from '@angular/core';
import { TsysTableDataSource } from './tsys-table/tsys-table-datasource';
@Injectable({
  providedIn: 'root'
})
export class TicketFinderService implements OnInit {

  private dataSource: TsysTableDataSource;

  constructor() {
    this.dataSource = new TsysTableDataSource();
  }

  findById(id: string) {
    return this.dataSource.data.find((ticket) => {return ticket.id == id});
  }

  ngOnInit(): void {}
}
