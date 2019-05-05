import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'src/app/services/speech.service';
import { SpeechViewModel } from 'src/app/model/viewmodel/SpeechViewModel';
import * as moment from 'moment';
@Component({
  selector: 'app-speechlist',
  templateUrl: './speechlist.component.html',
  styleUrls: ['./speechlist.component.css']
})
export class SpeechlistComponent implements OnInit {

  speeches: SpeechViewModel[];
  constructor(private speechService:SpeechService) { }

  ngOnInit() {
    var x = this.speechService.GetSpeechList().map(x => {
      return {
        "Id":x.Id,
        "Content":x.Content,
        "Keywords":x.Keywords.join(),
        "Author": x.Author.FirstName + ' ' + x.Author.LastName,
        "SpeechDate": moment( x.SpeechDate).format("MM-DD-YYYY")
      };
    });
    this.speeches = x;

  }

}
