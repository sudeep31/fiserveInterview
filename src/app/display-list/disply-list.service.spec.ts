import { TestBed } from '@angular/core/testing';

import { DisplyListService } from './disply-list.service';


describe('DisplyListService', () => {
  let service: DisplyListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplyListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
