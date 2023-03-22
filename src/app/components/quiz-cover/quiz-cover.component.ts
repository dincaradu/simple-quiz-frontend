import { Component, Input } from '@angular/core';

import * as translation from '../../../assets/languages/en.lang.json';

@Component({
  selector: 'app-quiz-cover',
  templateUrl: './quiz-cover.component.html'
})
export class QuizCoverComponent {
  @Input() isQuizOver = false;

  private text = translation;
  public title = this.text.quizTitle;
  public startQuizBtn = this.text.quizStart;

  constructor() {
    if (this.isQuizOver) this.startQuizBtn = this.text.quizRestart;
  }

  startQuiz() {
    // this.router.navigate(['question', 1]);
    console.log('test');
  }
}
