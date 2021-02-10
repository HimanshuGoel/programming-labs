import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionTokenFactoryComponent } from './injection-token-factory.component';

describe('InjectionTokenFactoryComponent', () => {
  let component: InjectionTokenFactoryComponent;
  let fixture: ComponentFixture<InjectionTokenFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectionTokenFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionTokenFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
