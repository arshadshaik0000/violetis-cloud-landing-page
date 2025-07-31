import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployMonitorSection } from './deploy-monitor-section';

describe('DeployMonitorSection', () => {
  let component: DeployMonitorSection;
  let fixture: ComponentFixture<DeployMonitorSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeployMonitorSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeployMonitorSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
