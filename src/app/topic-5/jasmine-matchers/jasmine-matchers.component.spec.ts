import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JasmineMatchersComponent } from './jasmine-matchers.component';

describe('JasmineMatchersComponent', () => {
  let component: JasmineMatchersComponent;
  let fixture: ComponentFixture<JasmineMatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JasmineMatchersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JasmineMatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can match anything if we do not care for specific parameters', () => {
    const spyTrackEvent = spyOn(component, 'method1').and.callThrough();

    component.method1(1, 'test@example.org', {});

    expect(spyTrackEvent).toHaveBeenCalledWith(
      jasmine.any(Number),
      'test@example.org',
      jasmine.anything()
    );
  });

  it('can match partial strings (regex)', () => {
    const spyCreateApiToken = spyOn(component, 'method2').and.callThrough();
    component.method2('some-user-id');

    expect(spyCreateApiToken).toHaveBeenCalledWith(
      jasmine.stringMatching('ser')
    );
  });

  it('can match partial objects', () => {
    const spyCreateUser = spyOn(component, 'method3').and.callThrough();
    component.method3({
      email: 'test@example.org',
      firstName: 'John',
      lastName: 'Doe',
    });

    expect(spyCreateUser).toHaveBeenCalledWith(
      jasmine.objectContaining({
        email: 'test@example.org',
      })
    );
  });

  it('can match partial arrays', () => {
    const spyCreateUses = spyOn(component, 'method3').and.callThrough();
    component.method3([
      { email: 'test@example.org' },
      { email: 'john.doe@ac.me' },
    ]);

    expect(spyCreateUses).toHaveBeenCalledWith(
      jasmine.arrayContaining([{ email: 'john.doe@ac.me' }])
    );
  });
});
