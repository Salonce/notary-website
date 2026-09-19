import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeforeVisit } from './before-visit';

describe('BeforeVisit', () => {
  let component: BeforeVisit;
  let fixture: ComponentFixture<BeforeVisit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeforeVisit],
    }).compileComponents();

    fixture = TestBed.createComponent(BeforeVisit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
