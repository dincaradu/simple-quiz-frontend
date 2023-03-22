import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import * as translation from '../../../assets/languages/en.lang.json';

@Component({
  selector: 'app-quiz-end',
  templateUrl: './quiz-end.component.html'
})
export class QuizEndComponent {
  private text = translation;
  public subtitle = this.text.quizSummary;

  public route$: Observable<any>;

  constructor(private route: ActivatedRoute) {
    this.route$ = this.route.data;
  }
}
