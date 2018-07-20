import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { TsysDashboardComponent } from '../tsys-dashboard/tsys-dashboard.component';
import { TsysTableComponent } from '../tsys-table/tsys-table.component';
import { AuthGuard } from '../auth-guard.service';
import { TicketInfoComponent } from '../ticket-info/ticket-info.component';
import { TicketFormComponent } from '../ticket-form/ticket-form.component';
import { LoginOutComponent } from '../login-out/login-out.component';

const tsysRoutes: Routes = [
  { path: 'dashboard', component: TsysDashboardComponent, canActivate: [AuthGuard] },
  { path: 'tickets', component: TsysTableComponent, canActivate: [AuthGuard] },
  { path: 'tickets/:id', component: TicketInfoComponent, canActivate: [AuthGuard] },
  { path: 'newticket', component: TicketFormComponent, canActivate: [AuthGuard] },
  { path: 'editticket', component: TicketFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginOutComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      tsysRoutes,
      { enableTracing: false } // debugging purposes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class TsysRoutingModule { }
