import { Subject } from 'rxjs';
import { BlinkerService } from 'src/app/services/blinker.service';
import { BlinkerComponent } from './blinker.component';

describe('BlinkerComponent', () => {
  let component: BlinkerComponent;
  let serviceSpy: jasmine.SpyObj<BlinkerService>;
  let isLitSubject: Subject<boolean>;

  beforeEach(() => {
    isLitSubject = new Subject<boolean>();
    serviceSpy = jasmine.createSpyObj<BlinkerService>({ isLit: isLitSubject });
    component = new BlinkerComponent(serviceSpy);
    component.ngOnInit();
  });


  it('should have the text X when blinker is lit', () => {
    isLitSubject.next(true);

    expect(component.text).toBe('X');
  });

  it('should have empty text when blinker is unlit', () => {
    isLitSubject.next(false);

    expect(component.text).toBe('');
  });
});
