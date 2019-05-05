import { Injectable } from '@angular/core';
import { Speech } from '../model/domainmodel/Speech';


@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  speeches: Speech[];
  
  constructor() { }

  GetSpeechList() {
    
    this.speeches = [
      {
        "Id":"1",
        "Content":"Hello World Content 1",
        "Keywords":["hello"],
        "Author": { 
          "Id":"1",
          "FirstName":"Julius",
          "LastName":"Bacosa"
        },
        "SpeechDate": new Date(2019,10,10)
      },
      {
        "Id":"1",
        "Content":"Hello World Content 2",
        "Keywords":["World","Hello"],
        "Author": { 
          "Id":"1",
          "FirstName":"Faith",
          "LastName":"Bacosa"
        },
        "SpeechDate": new Date(2019,10,10)
      }
    ];

    localStorage.setItem('speeches', JSON.stringify(this.speeches)); 


    if(localStorage.getItem('speeches')){
      this.speeches = JSON.parse(localStorage.getItem('speeches')); 
    }
    return this.speeches;
  }

  GetSpeechById() {

  }

  AddSpeech() {

    if(localStorage.getItem('speeches') === null){
      localStorage.setItem('speeches', JSON.stringify(this.speeches)); 
    }

  }


}
