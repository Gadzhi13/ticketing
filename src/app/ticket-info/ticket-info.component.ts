import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RouteDataService } from '../route-data.service';
import { ITicket } from '../iticket';
import { Ticket } from '../ticket';
import { TicketFinderService } from '../ticket-finder.service';

@Component({
  selector: 'tsys-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.css']
})
export class TicketInfoComponent implements OnInit {

  private id;
  private ticket: ITicket;

  constructor(private router: Router, private routeDataService: RouteDataService, private ticketFinder: TicketFinderService, private route: ActivatedRoute) {
  }

  editTicket() {
    this.routeDataService.data = this.ticket;
    this.router.navigate(['editticket']);
  }

  findTicket(id: string) :ITicket {
    return this.ticketFinder.findById(id);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.ticket = this.routeDataService.data || this.findTicket(this.id);
    });
  }
}