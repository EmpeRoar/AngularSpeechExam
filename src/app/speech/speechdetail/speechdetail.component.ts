import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { SpeechViewModel } from 'src/app/model/viewmodel/SpeechViewModel';
import { SpeechService } from 'src/app/services/speech.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { Speech } from 'src/app/model/domainmodel/Speech';
@Component({
  selector: 'app-speechdetail',
  templateUrl: './speechdetail.component.html',
  styleUrls: ['./speechdetail.component.css']
})
export class SpeechdetailComponent implements OnInit {
  
  @Input() speechInput: SpeechViewModel;
  @Output() refreshSpeechListOutput = new EventEmitter<boolean>();

  constructor(private speechService: SpeechService,
              private router: Router) { }

  ngOnInit() {
    this.loadSpeech();
  }


  loadSpeech(){
    if(this.speechService.GetSpeechList() !== null){
      this.speechInput =this.speechService.GetSpeechList().map(x => {
        return {
          "Id":x.Id,
          "Title": x.Title,
          "Content":x.Content,
          "Keywords":x.Keywords.join(),
          "Author": x.Author.FirstName + ' ' + x.Author.LastName,
          "SpeechDate": moment( x.SpeechDate).format("MM-DD-YYYY")
        };
      })[0];
    }
   
  }

  deleteSpeech(speech: SpeechViewModel) {
      this.speechService.DeleteSpeech(speech.Id);

      this.loadSpeech();
      
      this.refreshSpeechListOutput.emit(true);
  }


}
