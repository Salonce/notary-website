import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerImage } from './banner-image';

describe('BannerImage', () => {
  let component: BannerImage;
  let fixture: ComponentFixture<BannerImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerImage],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
