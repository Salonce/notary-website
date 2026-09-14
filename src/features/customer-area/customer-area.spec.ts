import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerArea } from './customer-area';

describe('CustomerArea', () => {
  let component: CustomerArea;
  let fixture: ComponentFixture<CustomerArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerArea],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerArea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
