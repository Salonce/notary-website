import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleDivider } from './title-divider';

describe('TitleDivider', () => {
  let component: TitleDivider;
  let fixture: ComponentFixture<TitleDivider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleDivider],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleDivider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
