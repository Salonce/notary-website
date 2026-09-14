import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LatinQuote } from './latin-quote';

describe('LatinQuote', () => {
  let component: LatinQuote;
  let fixture: ComponentFixture<LatinQuote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatinQuote],
    }).compileComponents();

    fixture = TestBed.createComponent(LatinQuote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
