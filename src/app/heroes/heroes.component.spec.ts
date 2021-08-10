import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [
        BrowserModule,
        FormsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of heroes', () => {
    const heroElements = fixture.debugElement.queryAll(By.css('li'));

    expect(heroElements.length).toBe(component.heroes.length);
  });

  it('should highlight the selected hero', () => {
    const firstHeroLi = fixture.debugElement.query(By.css('li')).nativeElement as HTMLElement;
    firstHeroLi.click();
    fixture.detectChanges();

    expect(firstHeroLi.classList).toContain('selected');
  });

  it('should show details about the selected hero', () => {
    fixture.debugElement.query(By.css('li')).nativeElement.click();
    fixture.detectChanges();

    const heroDetailsTitle = fixture.debugElement.query(By.css('h2.details')).nativeElement as HTMLElement;
    expect(heroDetailsTitle.innerText).toMatch(new RegExp(component.heroes[0].name, 'i'));
  });

  it('should update the name of a modified hero', async () => {
    const firstHeroLi = fixture.debugElement.query(By.css('li')).nativeElement as HTMLElement;
    firstHeroLi.click();
    fixture.detectChanges();

    const firstHeroInput = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    firstHeroInput.value = 'modified';
    firstHeroInput.dispatchEvent(new Event('input'));

    await fixture.whenStable();
    fixture.detectChanges();

    expect(firstHeroLi.textContent).toContain('modified');
  });
});
