
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsysTableComponent } from './tsys-table.component';

describe('TsysTableComponent', () => {
  let component: TsysTableComponent;
  let fixture: ComponentFixture<TsysTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TsysTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsysTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
