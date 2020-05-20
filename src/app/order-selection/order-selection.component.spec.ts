import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSelectionComponent } from './order-selection.component';

describe('OrderSelectionComponent', () => {
  let component: OrderSelectionComponent;
  let fixture: ComponentFixture<OrderSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
