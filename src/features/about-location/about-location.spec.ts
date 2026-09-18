import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutLocation } from './about-location';

describe('AboutLocation', () => {
  let component: AboutLocation;
  let fixture: ComponentFixture<AboutLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutLocation],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutLocation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
