import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForDisabled } from './for-disabled';

describe('ForDisabled', () => {
  let component: ForDisabled;
  let fixture: ComponentFixture<ForDisabled>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForDisabled],
    }).compileComponents();

    fixture = TestBed.createComponent(ForDisabled);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
