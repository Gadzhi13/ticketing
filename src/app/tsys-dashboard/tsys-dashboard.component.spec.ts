
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsysDashboardComponent } from './tsys-dashboard.component';

describe('TsysDashboardComponent', () => {
  let component: TsysDashboardComponent;
  let fixture: ComponentFixture<TsysDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TsysDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsysDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
