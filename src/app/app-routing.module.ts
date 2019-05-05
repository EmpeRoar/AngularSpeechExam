import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeechComponent } from './speech/speech/speech.component';
import { AddspeechComponent } from './speech/addspeech/addspeech.component';
import { SearchComponent } from './speech/search/search.component';

const routes: Routes = [
  { path: '', component: SpeechComponent },
  { path: 'add', component:  AddspeechComponent},
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
