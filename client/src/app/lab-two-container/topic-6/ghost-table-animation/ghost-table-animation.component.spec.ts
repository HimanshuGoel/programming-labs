import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostTableAnimationComponent } from './ghost-table-animation.component';

describe('GhostTableAnimationComponent', () => {
  let component: GhostTableAnimationComponent;
  let fixture: ComponentFixture<GhostTableAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostTableAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostTableAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
