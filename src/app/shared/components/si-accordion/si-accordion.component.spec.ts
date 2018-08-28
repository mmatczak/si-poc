import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiAccordionComponent } from './si-accordion.component';

describe('SiAccordionComponent', () => {
  let component: SiAccordionComponent;
  let fixture: ComponentFixture<SiAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
