import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('DashboardSection', () => {
  let component: DashboardSection;
  let fixture: ComponentFixture<DashboardSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
