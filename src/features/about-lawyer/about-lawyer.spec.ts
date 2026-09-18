import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutLawyer } from './about-lawyer';

describe('AboutLawyer', () => {
  let component: AboutLawyer;
  let fixture: ComponentFixture<AboutLawyer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutLawyer],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutLawyer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
