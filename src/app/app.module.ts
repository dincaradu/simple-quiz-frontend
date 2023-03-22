import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';

import { QuizCoverComponent } from './components/quiz-cover/quiz-cover.component';
import { QuizStartComponent } from './pages/quiz-start/quiz-start.component';
import { QuizEndComponent } from './pages/quiz-end/quiz-end.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,

    QuizCoverComponent,
    QuizStartComponent,
    QuizEndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
