import { TestBed } from '@angular/core/testing';

import { SignInInterceptor } from './sign-in.interceptor';

describe('SignInInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SignInInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SignInInterceptor = TestBed.inject(SignInInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
