import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotarialServices } from './notarial-services';

describe('NotarialServices', () => {
  let component: NotarialServices;
  let fixture: ComponentFixture<NotarialServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotarialServices],
    }).compileComponents();

    fixture = TestBed.createComponent(NotarialServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
