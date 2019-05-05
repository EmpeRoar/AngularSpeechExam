import { Component, OnInit, Input } from '@angular/core';
import { SpeechViewModel } from 'src/app/model/viewmodel/SpeechViewModel';
import { SpeechService } from 'src/app/services/speech.service';
import * as moment from 'moment';
@Component({
  selector: 'app-speechdetail',
  templateUrl: './speechdetail.component.html',
  styleUrls: ['./speechdetail.component.css']
})
export class SpeechdetailComponent implements OnInit {
  
  @Input() speech: SpeechViewModel;
 
  constructor(private speechService: SpeechService) { }

  ngOnInit() {
      if(this.speech==null){
        this.speech =this.speechService.GetSpeechList().map(x => {
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



}
