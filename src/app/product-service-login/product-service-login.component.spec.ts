import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductServiceLoginComponent } from './product-service-login.component';

describe('ProductServiceLoginComponent', () => {
  let component: ProductServiceLoginComponent;
  let fixture: ComponentFixture<ProductServiceLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductServiceLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductServiceLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
