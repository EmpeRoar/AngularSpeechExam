import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SpeechService } from 'src/app/services/speech.service';
import { SpeechViewModel } from 'src/app/model/viewmodel/SpeechViewModel';
import * as moment from 'moment';
@Component({
  selector: 'app-speechlist',
  templateUrl: './speechlist.component.html',
  styleUrls: ['./speechlist.component.css']
})
export class SpeechlistComponent implements OnInit {

  @Input() refreshInput: boolean;
  @Output() speechClickedOutput = new EventEmitter<SpeechViewModel>();
  
  speeches: SpeechViewModel[];

  constructor(private speechService:SpeechService) { }

  ngOnInit() {
    this.loadSpeeches();
  }

  ngOnChanges() {
    this.loadSpeeches();
  }

  loadSpeeches() {
    this.speeches = this.speechService.GetSpeechList().map(x => {
      return {
        "Id":x.Id,
        "Title": x.Title,
        "Content":x.Content,
        "Keywords":x.Keywords.join(),
        "Author": x.Author.FirstName + ' ' + x.Author.LastName,
        "SpeechDate": moment( x.SpeechDate).format("MM-DD-YYYY")
      };
    });
  }

  onClick(speech: SpeechViewModel): void {
    this.speechClickedOutput.emit(speech);
  }

}
