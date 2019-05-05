import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspeechComponent } from './addspeech.component';

describe('AddspeechComponent', () => {
  let component: AddspeechComponent;
  let fixture: ComponentFixture<AddspeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddspeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddspeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
