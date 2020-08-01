/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarsiService } from './carsi.service';

describe('Service: Carsi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarsiService]
    });
  });

  it('should ...', inject([CarsiService], (service: CarsiService) => {
    expect(service).toBeTruthy();
  }));
});
