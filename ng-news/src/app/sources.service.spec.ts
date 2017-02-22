import { TestBed, inject } from '@angular/core/testing';
import { SourcesService } from './sources.service';
import { SourcesConfig } from './sources-config';
import { HttpModule }          from '@angular/http';

describe('SourcesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      providers: [SourcesService, SourcesConfig]
    });
  });

  it('should ...', inject([SourcesService], (service: SourcesService) => {
    expect(service).toBeTruthy();
  }));
});
