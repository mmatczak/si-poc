import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithErrorMsgComponent } from './with-error-msg.component';

describe('WithErrorMsgComponent', () => {
  let component: WithErrorMsgComponent;
  let fixture: ComponentFixture<WithErrorMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithErrorMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithErrorMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
