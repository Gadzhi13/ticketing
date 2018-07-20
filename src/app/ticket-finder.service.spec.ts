import { TestBed, inject } from '@angular/core/testing';

import { TicketFinderService } from './ticket-finder.service';

describe('TicketFinderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketFinderService]
    });
  });

  it('should be created', inject([TicketFinderService], (service: TicketFinderService) => {
    expect(service).toBeTruthy();
  }));
});
