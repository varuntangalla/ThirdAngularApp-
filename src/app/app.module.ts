import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityComponent } from './activity/activity.component';
import { PlayersComponent } from './players/players.component';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    PlayersComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
