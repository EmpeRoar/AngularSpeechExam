import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Speech } from 'src/app/model/domainmodel/Speech';
import { SpeechService } from 'src/app/services/speech.service';
import { Router } from "@angular/router"
@Component({
  selector: 'app-addspeech',
  templateUrl: './addspeech.component.html',
  styleUrls: ['./addspeech.component.css']
})
export class AddspeechComponent implements OnInit {

  addSpeechForm: FormGroup;
  submitted = false;
  success = false;

  public options: Object = {
    height:300
  }

  constructor(private formBuilder: FormBuilder,
              private speechService: SpeechService,
              private router: Router) { }

  ngOnInit() {
    this.addSpeechForm = this.formBuilder.group({
      authorfirstname: ['', Validators.required],
      authorlastname: ['', Validators.required],
      title:['', Validators.required],
      speechcontent: ['', Validators.required],
      keywords:[''],
      speechdate: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.addSpeechForm.invalid) {
        return;
    }

    let count = 0;
    if(this.speechService.GetSpeechList() == null){
       count = 0;
    }else{
       count = this.speechService.GetSpeechList().length;
    }
  
    var speech : Speech = {
      Id : count + 1,
      Title: this.addSpeechForm.controls.title.value,
      Content : this.addSpeechForm.controls.speechcontent.value,
      Author : {
        FirstName : this.addSpeechForm.controls.authorfirstname.value,
        LastName : this.addSpeechForm.controls.authorlastname.value
      },
      Keywords : this.addSpeechForm.controls.keywords.value.split(","),
      SpeechDate : this.addSpeechForm.controls.speechdate.value
    };
    this.speechService.AddSpeech(speech);
    this.router.navigate(['/']);
  }
}
