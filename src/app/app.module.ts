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
import { SearchComponent } from './speech/search/search.component';
import { SpeechService } from '../app/services/speech.service';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpeechComponent,
    SpeechlistComponent,
    SpeechdetailComponent,
    AddspeechComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],
  providers: [SpeechService],
  bootstrap: [AppComponent]
})
export class AppModule { }
