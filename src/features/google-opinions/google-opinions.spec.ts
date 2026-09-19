import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleOpinions } from './google-opinions';

describe('GoogleOpinions', () => {
  let component: GoogleOpinions;
  let fixture: ComponentFixture<GoogleOpinions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleOpinions],
    }).compileComponents();

    fixture = TestBed.createComponent(GoogleOpinions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
