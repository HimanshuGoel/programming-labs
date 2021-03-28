import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTwoContainerComponent } from './lab-two-container.component';

describe('LabTwoContainerComponent', () => {
  let component: LabTwoContainerComponent;
  let fixture: ComponentFixture<LabTwoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabTwoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabTwoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
