import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperControlSection } from './developer-control-section';

describe('DeveloperControlSection', () => {
  let component: DeveloperControlSection;
  let fixture: ComponentFixture<DeveloperControlSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperControlSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperControlSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
