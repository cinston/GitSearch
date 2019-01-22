import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ProfileService} from '../services/profile.service';

import { AppComponent } from './app.component';
import { GitProfileComponent } from './git-profile/git-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    GitProfileComponent,
    HttpModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
