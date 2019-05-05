import { Injectable } from '@angular/core';
import { Speech } from '../model/domainmodel/Speech';


@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  speeches: Speech[];
  
  constructor() { }

  GetSpeechList() {
    
    if(this.speeches === null){
      this.speeches = [
        {
          "Id":1,
          "Title":"Speech of Julius Bacosa",
          "Content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          "Keywords":["julius","speech"],
          "Author": { 
            "FirstName":"Julius",
            "LastName":"Bacosa"
          },
          "SpeechDate": new Date(2019,4,19)
        }
      ];
 
      localStorage.setItem('speeches', JSON.stringify(this.speeches)); 
    }

   
    if(localStorage.getItem('speeches')){
      this.speeches = JSON.parse(localStorage.getItem('speeches')); 
    }
    return this.speeches;
  }

  GetSpeechById() {

  }

  DeleteSpeech(speechId: number){
    if(localStorage.getItem('speeches') !== null){
      let speeches = JSON.parse(localStorage.getItem('speeches'));       
      var newListOfSpeech = speeches.filter(x => {
         return x.Id != speechId
      });
      localStorage.setItem('speeches', JSON.stringify(newListOfSpeech)); 
    }
  }

  AddSpeech(speech: Speech) {

    if(localStorage.getItem('speeches') === null){
      this.speeches = [];
      this.speeches.push(speech);
      localStorage.setItem('speeches', JSON.stringify(this.speeches)); 
    }else{
      this.speeches = JSON.parse(localStorage.getItem('speeches'));       
      this.speeches.push(speech);
      localStorage.setItem('speeches', JSON.stringify(this.speeches)); 
    }

  }


}
