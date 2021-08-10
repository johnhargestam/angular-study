import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlinkerComponent } from './components/blinker/blinker.component';

const routes: Routes = [
  { path: 'blinker', component: BlinkerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
