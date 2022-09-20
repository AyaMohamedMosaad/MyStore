import { TestBed } from '@angular/core/testing';

import { AddToCardServicesService } from './add-to-card-services.service';

describe('AddToCardServicesService', () => {
  let service: AddToCardServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddToCardServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
