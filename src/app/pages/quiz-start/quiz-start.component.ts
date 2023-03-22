import { Component } from '@angular/core';

import * as translation from '../../../assets/languages/en.lang.json';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html'
})
export class QuizStartComponent {
  private text = translation;
  public subtitle = this.text.quizSubtitle;
}
