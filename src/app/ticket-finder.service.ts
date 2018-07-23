import { Injectable } from '@angular/core';
import { TsysTableDataSource } from './tsys-table/tsys-table-datasource';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class TicketFinderService {

  private dataSource: TsysTableDataSource;

  constructor(private http: HttpService) {
    this.dataSource = new TsysTableDataSource(this.http);
  }

  findById(id: string) {
    return this.dataSource.data.find((ticket) => {return ticket.id == id});
  }
}
