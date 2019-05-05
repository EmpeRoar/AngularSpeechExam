import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechdetailComponent } from './speechdetail.component';

describe('SpeechdetailComponent', () => {
  let component: SpeechdetailComponent;
  let fixture: ComponentFixture<SpeechdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
