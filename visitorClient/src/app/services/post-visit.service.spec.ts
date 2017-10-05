import { TestBed, inject } from '@angular/core/testing';

import { PostVisitService } from './post-visit.service';

describe('PostVisitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostVisitService]
    });
  });

  it('should be created', inject([PostVisitService], (service: PostVisitService) => {
    expect(service).toBeTruthy();
  }));
});
