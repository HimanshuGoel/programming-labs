import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedSimpleChangesComponent } from './typed-simple-changes.component';

describe('TypedSimpleChangesComponent', () => {
  let component: TypedSimpleChangesComponent;
  let fixture: ComponentFixture<TypedSimpleChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypedSimpleChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypedSimpleChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
