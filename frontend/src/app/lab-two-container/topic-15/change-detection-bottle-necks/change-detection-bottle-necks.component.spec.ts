import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionBottleNecksComponent } from './change-detection-bottle-necks.component';

describe('ChangeDetectionBottleNecksComponent', () => {
  let component: ChangeDetectionBottleNecksComponent;
  let fixture: ComponentFixture<ChangeDetectionBottleNecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionBottleNecksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionBottleNecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
