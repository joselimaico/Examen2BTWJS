import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionPadreComponent } from './descripcion-padre.component';

describe('DescripcionPadreComponent', () => {
  let component: DescripcionPadreComponent;
  let fixture: ComponentFixture<DescripcionPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
