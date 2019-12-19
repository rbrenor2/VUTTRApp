import { TestBed } from '@angular/core/testing';

import { VuttrApiService } from './vuttr-api.service';

describe('VuttrApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VuttrApiService = TestBed.get(VuttrApiService);
    expect(service).toBeTruthy();
  });
});
