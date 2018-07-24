import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ITicket } from '../iticket';
import { HttpService } from '../http.service';

/**
 * Data source for the TsysTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */


/*var rawData: ITicket[] = [
  {id: '1', title: 'Hydrogen', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '2', title: 'Helium', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '3', title: 'Lithium', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '4', title: 'Beryllium', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '5', title: 'Boron', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '6', title: 'Carbon', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '7', title: 'Nitrogen', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '8', title: 'Oxygen', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '9', title: 'Fluorine', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '10', title: 'Neon', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '11', title: 'Sodium', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '12', title: 'Magnesium', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '13', title: 'Aluminum', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '14', title: 'Silicon', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '15', title: 'Phosphorus', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '16', title: 'Sulfur', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '17', title: 'Chlorine', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '18', title: 'Argon', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '19', title: 'Potassium', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '20', title: 'Calcium', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '1', title: 'Hydrogen', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '2', title: 'Helium', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '3', title: 'Lithium', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '4', title: 'Beryllium', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '5', title: 'Boron', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '6', title: 'Carbon', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '7', title: 'Nitrogen', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '8', title: 'Oxygen', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '9', title: 'Fluorine', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '10', title: 'Neon', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '11', title: 'Sodium', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '12', title: 'Magnesium', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '13', title: 'Aluminum', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '14', title: 'Silicon', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '15', title: 'Phosphorus', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '16', title: 'Sulfur', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '17', title: 'Chlorine', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '18', title: 'Argon', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '19', title: 'Potassium', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())},
  {id: '20', title: 'Calcium', priority: 0, impact: 0, requesttype: 'Request Type', submitdate: new Date(Date.now()), description: 'Description', status: 'Status', link: 'Link', product: 'Product', said: 322, modificationdate: new Date(Date.now())}
];*/

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

  addOrChangeData(newTicket: ITicket) {
    var changeIndex = this.data.findIndex((dataElement) => {return dataElement.id == newTicket.id});
    if (changeIndex !== -1) {
      this.data.splice(changeIndex, 1, newTicket);
    } else {
      this.data.push(newTicket);
    }
    console.log("ticket added!" + JSON.stringify(newTicket));
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
