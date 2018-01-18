import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestDeviceComponent } from './latest-device.component';

describe('LatestDeviceComponent', () => {
  let component: LatestDeviceComponent;
  let fixture: ComponentFixture<LatestDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
