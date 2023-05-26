import { TestBed } from '@angular/core/testing';

import { DataProduitService } from './data-produit.service';

describe('DataProduitService', () => {
  let service: DataProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
