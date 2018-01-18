import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewByUserComponent } from './review-by-user.component';

describe('ReviewByUserComponent', () => {
  let component: ReviewByUserComponent;
  let fixture: ComponentFixture<ReviewByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
