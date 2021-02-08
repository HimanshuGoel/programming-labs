import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterateStringEnumComponent } from './iterate-string-enum.component';

describe('IterateStringEnumComponent', () => {
  let component: IterateStringEnumComponent;
  let fixture: ComponentFixture<IterateStringEnumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IterateStringEnumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IterateStringEnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
