import { TestBed } from '@angular/core/testing';

import { DiarioEmbarazadaService } from './diario-embarazada.service';

describe('DiarioEmbarazadaService', () => {
  let service: DiarioEmbarazadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiarioEmbarazadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
