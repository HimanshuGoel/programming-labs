import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadOffComponent } from './load-off.component';

describe('LoadOffComponent', () => {
  let component: LoadOffComponent;
  let fixture: ComponentFixture<LoadOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
