import { TestBed } from '@angular/core/testing';

import { ServiceHealthService } from './service-health.service';

describe('ServiceHealthService', () => {
  let service: ServiceHealthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceHealthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
