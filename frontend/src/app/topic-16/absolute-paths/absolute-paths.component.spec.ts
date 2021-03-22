import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsolutePathsComponent } from './absolute-paths.component';

describe('AbsolutePathsComponent', () => {
  let component: AbsolutePathsComponent;
  let fixture: ComponentFixture<AbsolutePathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsolutePathsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsolutePathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
