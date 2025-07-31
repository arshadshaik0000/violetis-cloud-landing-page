import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPlansSection } from './pricing-plans-section';

describe('PricingPlansSection', () => {
  let component: PricingPlansSection;
  let fixture: ComponentFixture<PricingPlansSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingPlansSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingPlansSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
