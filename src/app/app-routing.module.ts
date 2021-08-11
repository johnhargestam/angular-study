import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlinkerComponent } from './components/blinker/blinker.component';
import { RateLimitComponent } from './components/ratelimit/ratelimit.component';

const routes: Routes = [
  { path: 'blinker', component: BlinkerComponent },
  { path: 'ratelimit', component: RateLimitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
