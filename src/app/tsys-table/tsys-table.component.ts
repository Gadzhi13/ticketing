import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { TsysTableDataSource } from './tsys-table-datasource';
import { RouteDataService } from '../route-data.service';
import { ITicket } from '../iticket';
import { Ticket } from '../ticket';
import { HttpService } from '../http.service';

@Component({
  selector: 'tsys-table',
  templateUrl: './tsys-table.component.html',
  styleUrls: ['./tsys-table.component.css']
})
export class TsysTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filterSelect: ElementRef;
  private filterPredicateBuffer;
  dataSource: TsysTableDataSource;
  private filterValueBuffer: string = "";
  ticket: Ticket = new Ticket(0, 0, "", new Date(Date.now()), "", "", "", "", "", "", 0, new Date(Date.now()), "", "", "", "", "", "");
  displayedColumns: string[] = ['id', 'impact', 'submitdate', 'title', 'status'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  listOfProperties: string[] = [];
  allColumns: string[] = [];

  changeColumn (colName: string) {
    if (this.columnsToDisplay.includes(colName)) {
      this.columnsToDisplay.splice(this.columnsToDisplay.indexOf(colName), 1);
    } else {
      this.columnsToDisplay.push(colName);
    }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor ( private router: Router, private route: ActivatedRoute, private routeData: RouteDataService, private http: HttpService ) {
    this.listOfProperties = Object.getOwnPropertyNames(this.ticket);
    this.listOfProperties.forEach(el => {
      this.allColumns.push(el);
    });
    this.dataSource = new TsysTableDataSource(this.http);
  };

  applyFilter(filterValue: string) {
    console.log(typeof filterValue);
    this.filterValueBuffer = filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  changeFilterPredicateColumn(column: string) {
    this.dataSource.filterPredicate = (data: Element, filter: string) => data[column].indexOf(filter) != -1;
    this.applyFilter(this.filterValueBuffer);
  }

  resetFilterPredicate() {
    this.dataSource.filterPredicate = this.filterPredicateBuffer;
    this.applyFilter(this.filterValueBuffer);
  }

  sendData (data: ITicket) {
    this.routeData.data = data;
  }
}
