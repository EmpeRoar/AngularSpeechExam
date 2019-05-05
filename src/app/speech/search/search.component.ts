import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpeechService } from 'src/app/services/speech.service';
import { SpeechViewModel } from 'src/app/model/viewmodel/SpeechViewModel';
import * as moment from 'moment';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  submitted = false;
  success = false;
  searchResults: SpeechViewModel[];
  constructor(private formBuilder: FormBuilder,
              private speechService: SpeechService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchKeyword: [],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.searchForm.invalid) {
        return;
    }
  
    if(this.speechService.GetSpeechList()!==null){

      var speeches = this.speechService.GetSpeechList().filter(x => {
            var keywords = [];
            keywords = x.Keywords.filter(z => {
              let sk = this.searchForm.controls.searchKeyword.value;
              if(sk.includes(z.trim())){
                return z;
              } 
            
            });
            //console.log(keywords);
            if(keywords.length!=0){
              return x;
            }
      });
     

      this.searchResults = speeches.map(x => {
        return {
                "Id":x.Id,
                "Title": x.Title,
                "Content":x.Content,
                "Keywords":x.Keywords.join(),
                "Author": x.Author.FirstName + ' ' + x.Author.LastName,
                "SpeechDate": moment( x.SpeechDate).format("MM-DD-YYYY")
              }
      });
      

    }

    
  }
}
