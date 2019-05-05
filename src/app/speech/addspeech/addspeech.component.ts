import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addspeech',
  templateUrl: './addspeech.component.html',
  styleUrls: ['./addspeech.component.css']
})
export class AddspeechComponent implements OnInit {

  addSpeechForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addSpeechForm = this.formBuilder.group({
      authorfirstname: ['', Validators.required],
      authorlastname: ['', Validators.required],
      speechcontent: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.addSpeechForm.invalid) {
        return;
    }

    console.log('Hello World');
  }
}
