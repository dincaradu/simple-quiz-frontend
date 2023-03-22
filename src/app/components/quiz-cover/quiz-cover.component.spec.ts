import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCoverComponent } from './quiz-cover.component';

describe('QuizCoverComponent', () => {
  let component: QuizCoverComponent;
  let fixture: ComponentFixture<QuizCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizCoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
