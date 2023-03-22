import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizEndComponent } from './pages/quiz-end/quiz-end.component';
import { QuizStartComponent } from './pages/quiz-start/quiz-start.component';

const routes: Routes = [
  { path: '', redirectTo: '/quiz', pathMatch: 'full' },
  { path: 'quiz', component: QuizStartComponent },
  { path: 'summary', component: QuizEndComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
