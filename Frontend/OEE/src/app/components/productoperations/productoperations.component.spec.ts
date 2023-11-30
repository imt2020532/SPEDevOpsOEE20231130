import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoperationsComponent } from './productoperations.component';

describe('ProductoperationsComponent', () => {
  let component: ProductoperationsComponent;
  let fixture: ComponentFixture<ProductoperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
