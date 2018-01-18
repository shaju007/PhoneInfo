import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullReviewComponent } from './full-review.component';

describe('FullReviewComponent', () => {
  let component: FullReviewComponent;
  let fixture: ComponentFixture<FullReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
