import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeeentryoneComponent } from './oeeentryone.component';

describe('OeeentryoneComponent', () => {
  let component: OeeentryoneComponent;
  let fixture: ComponentFixture<OeeentryoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OeeentryoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OeeentryoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
