import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmachComponent } from './addmach.component';

describe('AddmachComponent', () => {
  let component: AddmachComponent;
  let fixture: ComponentFixture<AddmachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
