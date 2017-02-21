import { TestBed, inject } from '@angular/core/testing';
import { SourcesService } from './sources.service';

describe('SourcesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SourcesService]
    });
  });

  it('should ...', inject([SourcesService], (service: SourcesService) => {
    expect(service).toBeTruthy();
  }));
});
