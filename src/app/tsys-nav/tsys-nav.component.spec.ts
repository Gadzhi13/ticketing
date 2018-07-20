
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsysNavComponent } from './tsys-nav.component';

describe('TsysNavComponent', () => {
  let component: TsysNavComponent;
  let fixture: ComponentFixture<TsysNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TsysNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsysNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
