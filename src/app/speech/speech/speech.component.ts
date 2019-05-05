import { Component, OnInit } from '@angular/core';
import { SpeechViewModel } from 'src/app/model/viewmodel/SpeechViewModel';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})
export class SpeechComponent implements OnInit {

  public clickedSpeech: SpeechViewModel;
  constructor() { }
  
  ngOnInit() {
  }
  childSpeechClicked(speech: SpeechViewModel) {
    this.clickedSpeech = speech;
  }
}
