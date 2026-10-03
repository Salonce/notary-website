import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CopyrightMobile } from './copyright-mobile';

describe('CopyrightMobile', () => {
  let component: CopyrightMobile;
  let fixture: ComponentFixture<CopyrightMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyrightMobile],
    }).compileComponents();

    fixture = TestBed.createComponent(CopyrightMobile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
