import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingCssVariableComponent } from './binding-css-variable.component';

describe('BindingCssVariableComponent', () => {
  let component: BindingCssVariableComponent;
  let fixture: ComponentFixture<BindingCssVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingCssVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingCssVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
