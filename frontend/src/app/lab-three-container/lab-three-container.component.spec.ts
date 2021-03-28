import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabThreeContainerComponent } from './lab-three-container.component';

describe('LabThreeContainerComponent', () => {
  let component: LabThreeContainerComponent;
  let fixture: ComponentFixture<LabThreeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabThreeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabThreeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
