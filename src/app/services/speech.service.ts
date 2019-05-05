import { Injectable } from '@angular/core';
import { Speech } from '../model/domainmodel/Speech';


@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  speeches: Speech[];
  
  constructor() { }

  GetSpeechList() {
    
    // this.speeches = [
    //   {
    //     "Id":1,
    //     "Content":"Hello World Content 1",
    //     "Keywords":["hello"],
    //     "Author": { 
    //       "FirstName":"Julius",
    //       "LastName":"Bacosa"
    //     },
    //     "SpeechDate": new Date(2019,10,10)
    //   },
    //   {
    //     "Id":2,
    //     "Content":"Hello World Content 2",
    //     "Keywords":["World","Hello"],
    //     "Author": { 
    //       "FirstName":"Faith",
    //       "LastName":"Bacosa"
    //     },
    //     "SpeechDate": new Date(2019,10,10)
    //   }
    // ];

    // localStorage.setItem('speeches', JSON.stringify(this.speeches)); 

   
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
