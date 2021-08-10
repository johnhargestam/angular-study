import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlinkerService {

  readonly INTERVAL = 500;

  constructor() { }

  public isLit(): Observable<boolean> {
    return interval(this.INTERVAL).pipe(map(x => x % 2 === 0));
  }
}
