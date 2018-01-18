import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbrandsComponent } from './allbrands.component';

describe('AllbrandsComponent', () => {
  let component: AllbrandsComponent;
  let fixture: ComponentFixture<AllbrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllbrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
