import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap, delay, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RateLimitService {

  constructor() { }

  public rateLimit<T>(observable: Observable<T>, rps: number): Observable<T> {

    interface Record<T> {
      delay: number,
      timestamp: number,
      value: T,
    }

    return observable.pipe(
      scan((acc, value) => {
  
        const now = Date.now();
        acc = acc.filter((record) => record.timestamp > now - 1000);

        if (acc.length >= rps) {
  
          const firstRecord = acc[0];
          const timestamp = firstRecord.timestamp + (1000 * Math.floor(acc.length / rps));

          const lastRecord = acc[acc.length - 1];
  
          acc.push({
            delay: (lastRecord.timestamp < now) ?
              (timestamp - now) :
              (timestamp - lastRecord.timestamp),
            timestamp,
            value
          });
        } else {
          acc.push({
            delay: 0,
            timestamp: now,
            value
          });
        }
        return acc;
  
      }, [] as Record<T>[]),
      concatMap((records) => {
  
        const lastRecord = records[records.length - 1];
        const observable = of(lastRecord.value);
        return lastRecord.delay ? observable.pipe(delay(lastRecord.delay)) : observable;
      }));
  }
}
