import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sAuthGuard } from './s-auth.guard';

describe('sAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => sAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
