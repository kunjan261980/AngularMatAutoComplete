import { TestBed } from '@angular/core/testing';

import { AutocompleteMatService } from './autocomplete-mat.service';

describe('AutocompleteMatService', () => {
  let service: AutocompleteMatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutocompleteMatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
