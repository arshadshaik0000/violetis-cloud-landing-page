import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiApiSection } from './ai-api-section';

describe('AiApiSection', () => {
  let component: AiApiSection;
  let fixture: ComponentFixture<AiApiSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiApiSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiApiSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
