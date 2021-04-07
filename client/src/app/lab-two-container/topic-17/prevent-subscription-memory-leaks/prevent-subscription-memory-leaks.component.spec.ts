import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventSubscriptionMemoryLeaksComponent } from './prevent-subscription-memory-leaks.component';

describe('PreventSubscriptionMemoryLeaksComponent', () => {
  let component: PreventSubscriptionMemoryLeaksComponent;
  let fixture: ComponentFixture<PreventSubscriptionMemoryLeaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventSubscriptionMemoryLeaksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventSubscriptionMemoryLeaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
