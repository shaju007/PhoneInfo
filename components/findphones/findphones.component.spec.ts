import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindphonesComponent } from './findphones.component';

describe('FindphonesComponent', () => {
  let component: FindphonesComponent;
  let fixture: ComponentFixture<FindphonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindphonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
