import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { ITicket } from '../iticket';
import { Ticket } from '../ticket';
import { RouteDataService } from '../route-data.service';
import { TsysTableDataSource } from '../tsys-table/tsys-table-datasource';
import { InvalidFormDialogComponent } from '../invalid-form-dialog/invalid-form-dialog.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'tsys-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent {

  private prioOptions: number[] = [1,2,3];
  private impactOptions: number[] = [1,2,3];
  private requestTypeOptions: string[] = ['Product Enhancement Request', 'Product Technical Issue'];
  private productOptions: string[] = ['Mobile Center'];
  private statusOptions: string[] = ['Closed - Next Version', 'Closed - No Progress', 'Closed - Solved', 'Open', 'Pending Customer', 'Work in Progress'];
  private statusNextOptions: string[] = ['Open - Waiting for Supported Version', 'Open - in Contact with MF', 'Closed'];
  private saidOptions: string[] = ['108344698322'];
  private dataSource: TsysTableDataSource;
  private ticketForm: FormGroup;
  private ticket: ITicket = this.routeDataService.data || new Ticket();

  constructor(private fb: FormBuilder, private routeDataService: RouteDataService, private router: Router, private dialog: MatDialog, private http: HttpService) {
    this.dataSource = new TsysTableDataSource(this.http);
    this.createForm();
  }

  createForm() {
    this.ticketForm = this.fb.group({
      priority: this.ticket.priority,
      impact: [this.ticket.impact, Validators.required],
      requestType: [this.ticket.requesttype, Validators.required],
      submitDate: [this.ticket.submitdate, Validators.required],
      id: [this.ticket.id, Validators.required],
      title: [this.ticket.title, Validators.required],
      description: [this.ticket.description, Validators.required],
      status: [this.ticket.status, Validators.required],
      link: [this.ticket.link, Validators.required],
      product: [this.ticket.product, Validators.required],
      SAID: [this.ticket.said, Validators.required],
      modificationDate: [this.ticket.modificationdate, Validators.required],
      statusNextStep: this.ticket.statusnextstep,
      solution: this.ticket.solution,
      solutionDescription: this.ticket.solutiondescription,
      changeID: this.ticket.changeid,
      workflowStatus: this.ticket.workflowstatus,
      changeNote: this.ticket.changenote
    });
  }

  openDialog() {
    const dialogReference = this.dialog.open(InvalidFormDialogComponent, {
      width: '250px'
    })
  }

  saveData() {
    this.ticket = this.ticketForm.value;
    this.dataSource.addOrChangeData(this.ticket);
    this.http.addTicketToDb(this.ticket).subscribe((res) => {console.log(res)});
  }

  onSubmit() {
    if (this.ticketForm.status == 'VALID') {
      this.saveData();
      this.ticket = new Ticket();
      this.router.navigate(['tickets']);
    } else {
      this.openDialog();
    }
  }
}
