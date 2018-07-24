import { Injectable } from '@angular/core';
import { TsysTableDataSource } from './tsys-table/tsys-table-datasource';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class TicketFinderService {

  private dataSource: TsysTableDataSource;

  constructor() {
    this.dataSource = new TsysTableDataSource();
  }

  findById(id: string) {
    return this.dataSource.data.find((ticket) => {return ticket.id == id});
  }

  containsById(id: string) {
    if (this.dataSource.data.find((ticket) => {return ticket.id == id})) {
      return true
    } else {
      return false
    }
  }
}
