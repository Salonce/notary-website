import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactMap } from './contact-map';

describe('ContactMap', () => {
  let component: ContactMap;
  let fixture: ComponentFixture<ContactMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactMap],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
