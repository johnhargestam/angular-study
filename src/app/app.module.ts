import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlinkerComponent } from './components/blinker/blinker.component';
import { RateLimitComponent } from './components/ratelimit/ratelimit.component';

@NgModule({
  declarations: [
    AppComponent,
    BlinkerComponent,
    RateLimitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
