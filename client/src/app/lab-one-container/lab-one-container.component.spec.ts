import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabOneContainerComponent } from './lab-one-container.component';

describe('LabOneContainerComponent', () => {
  let component: LabOneContainerComponent;
  let fixture: ComponentFixture<LabOneContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabOneContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabOneContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
