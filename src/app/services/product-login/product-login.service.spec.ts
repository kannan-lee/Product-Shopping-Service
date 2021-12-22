import { TestBed } from '@angular/core/testing';

import { ProductLoginService } from './product-login.service';

describe('ProductLoginService', () => {
  let service: ProductLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
