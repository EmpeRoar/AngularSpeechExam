import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpeechComponent } from './speech/speech/speech.component';
import { SpeechlistComponent } from './speech/speechlist/speechlist.component';
import { SpeechdetailComponent } from './speech/speechdetail/speechdetail.component';
import { AddspeechComponent } from './speech/addspeech/addspeech.component';
import { UpdatespeechComponent } from './speech/updatespeech/updatespeech.component';
import { DeletespeechComponent } from './speech/deletespeech/deletespeech.component';
import { SearchComponent } from './speech/search/search.component';
import { SpeechService } from '../app/services/speech.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpeechComponent,
    SpeechlistComponent,
    SpeechdetailComponent,
    AddspeechComponent,
    UpdatespeechComponent,
    DeletespeechComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule  
  ],
  providers: [SpeechService],
  bootstrap: [AppComponent]
})
export class AppModule { }
