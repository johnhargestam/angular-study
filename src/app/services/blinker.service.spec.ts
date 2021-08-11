import { TestScheduler } from 'rxjs/testing';
import { take } from 'rxjs/operators';
import { BlinkerService } from './blinker.service';

describe('BlinkerService', () => {
  let service: BlinkerService;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    service = new BlinkerService();
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should alternate being lit and unlit', () => {
    testScheduler.run(({expectObservable}) => {
      const source$ = service.isLit().pipe(take(4));
      
      const expectedMarble = '500ms a 499ms b 499ms c 499ms (d|)';
      const expectedValues = { a: true, b: false, c: true, d: false };
      expectObservable(source$).toBe(expectedMarble, expectedValues);
    })
  });

});