import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationRowComponent } from './calculation-row.component';

describe('CalculationRowComponent', () => {
  let component: CalculationRowComponent;
  let fixture: ComponentFixture<CalculationRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
