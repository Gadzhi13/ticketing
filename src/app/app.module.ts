import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MAT_DATE_LOCALE,
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TsysTableComponent } from './tsys-table/tsys-table.component';
import { TsysDashboardComponent } from './tsys-dashboard/tsys-dashboard.component';
import { TsysNavComponent } from './tsys-nav/tsys-nav.component';
import { TsysRoutingModule } from './tsys-routing/tsys-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { TicketInfoComponent } from './ticket-info/ticket-info.component';
import { RippleDirective } from './ripple.directive';
import 'hammerjs';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { DateIfDatePipe } from './date-if-date.pipe';
import { InvalidFormDialogComponent } from './invalid-form-dialog/invalid-form-dialog.component';
import { LoginOutComponent } from './login-out/login-out.component';


@NgModule({
  declarations: [
    AppComponent,
    TsysTableComponent,
    TsysDashboardComponent,
    TsysNavComponent,
    TicketInfoComponent,
    RippleDirective,
    TicketFormComponent,
    DateIfDatePipe,
    InvalidFormDialogComponent,
    LoginOutComponent
  ],
  entryComponents: [
    InvalidFormDialogComponent
  ],
  imports: [
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    TsysRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    DatePipe,
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'}

],
  bootstrap: [AppComponent]
})
export class AppModule { }
