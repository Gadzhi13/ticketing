import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ITicket } from '../iticket';
import { HttpService } from '../http.service';

/**
 * Data source for the TsysTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */

export class TsysTableDataSource extends MatTableDataSource<ITicket> {
  paginator: MatPaginator;
  sort: MatSort;
  private imported = false;
  data: ITicket[] = [];

  constructor(private http?: HttpService) {
    super();
    if (this.http) {
      this.http.getTickets().subscribe(tickets => {
        this.http.dataBuffer = tickets;
        this.data = tickets;
      });  
    };
  }

  addOrChangeData(newTicket: ITicket, edit: boolean) {
    var changeIndex = this.data.findIndex((dataElement) => {return dataElement.id == newTicket.id});
    console.log("incoming ticket in dataSource:");
    if (changeIndex > -1 && edit) {
      this.data.splice(changeIndex, 1, newTicket);
      console.log("Ticket changed!");
    } else {
      this.data.push(newTicket);
      console.log("ticket added!");
    };
    console.log(newTicket);
  }

  addToDb(newTicket: ITicket) {
    this.http.addTicketToDb(newTicket).subscribe((res) => {console.log(res)});
  }

  editInDb(newTicket: ITicket) {
    this.http.editTicektInDb(newTicket).subscribe((res) => {console.log(res)});
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ITicket[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ITicket[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'title': return compare(a.title, b.title, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
