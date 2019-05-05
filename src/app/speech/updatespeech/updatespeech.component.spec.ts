import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatespeechComponent } from './updatespeech.component';

describe('UpdatespeechComponent', () => {
  let component: UpdatespeechComponent;
  let fixture: ComponentFixture<UpdatespeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatespeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatespeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
