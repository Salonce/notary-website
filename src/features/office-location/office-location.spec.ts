import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfficeLocation } from './office-location';

describe('OfficeLocation', () => {
  let component: OfficeLocation;
  let fixture: ComponentFixture<OfficeLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeLocation],
    }).compileComponents();

    fixture = TestBed.createComponent(OfficeLocation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
