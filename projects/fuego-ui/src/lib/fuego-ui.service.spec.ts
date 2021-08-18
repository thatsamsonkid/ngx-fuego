import { TestBed } from '@angular/core/testing';

import { FuegoUiService } from './fuego-ui.service';

describe('FuegoUiService', () => {
  let service: FuegoUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuegoUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
