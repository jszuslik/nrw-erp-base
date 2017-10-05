import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadSingleComponent } from './lead-single.component';

describe('LeadSingleComponent', () => {
  let component: LeadSingleComponent;
  let fixture: ComponentFixture<LeadSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
