import { TestBed } from '@angular/core/testing';

import { DocumentoStorageService } from './documento-storage.service';

describe('DocumentoStorageService', () => {
  let service: DocumentoStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentoStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
