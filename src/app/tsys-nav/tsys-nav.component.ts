import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouteDataService } from '../route-data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'tsys-nav',
  templateUrl: './tsys-nav.component.html',
  styleUrls: ['./tsys-nav.component.css']
})
export class TsysNavComponent implements OnInit {
  selector: number;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  emptyRouteData() {
    this.routeDataService.data = null;
  }

  constructor(private breakpointObserver: BreakpointObserver, private routeDataService: RouteDataService, private authService: AuthService) {}
  
  changePage(id: number) {
    this.selector = id;
  }
  
  logout() {
    this.authService.isLoggedIn = false;
  }

  ngOnInit(): void {
  }
}
