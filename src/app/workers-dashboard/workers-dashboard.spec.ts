import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersDashboard } from './workers-dashboard';

describe('WorkersDashboard', () => {
  let component: WorkersDashboard;
  let fixture: ComponentFixture<WorkersDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkersDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkersDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
