import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionHijoComponent } from './descripcion-hijo.component';

describe('DescripcionHijoComponent', () => {
  let component: DescripcionHijoComponent;
  let fixture: ComponentFixture<DescripcionHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
