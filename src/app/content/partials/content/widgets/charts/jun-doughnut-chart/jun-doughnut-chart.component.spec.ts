
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JunDoughnutChartComponent } from './jun-doughnut-chart.component';

describe('DoughnutChartComponent', () => {
  let component: JunDoughnutChartComponent;
  let fixture: ComponentFixture<JunDoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JunDoughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JunDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
