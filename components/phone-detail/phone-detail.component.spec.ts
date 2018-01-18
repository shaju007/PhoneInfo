import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDetailComponent } from './phone-detail.component';

describe('PhoneDetailComponent', () => {
  let component: PhoneDetailComponent;
  let fixture: ComponentFixture<PhoneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
