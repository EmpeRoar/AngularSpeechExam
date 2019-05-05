import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletespeechComponent } from './deletespeech.component';

describe('DeletespeechComponent', () => {
  let component: DeletespeechComponent;
  let fixture: ComponentFixture<DeletespeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletespeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletespeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
