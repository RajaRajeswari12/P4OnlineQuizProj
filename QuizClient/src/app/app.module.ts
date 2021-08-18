import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetQuizComponent } from './get-quiz/get-quiz.component';
import { ViewQuizComponent } from './view-quiz/view-quiz.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { QuizServiceService } from './quiz-service.service';
import { AppRouting } from './app.routing';
import { ReviewResultComponent } from './review-result/review-result.component';
import { LoginComponent } from './login/login.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { LoginRoutingGuard } from './loginRouting.service';
import { JwPaginationModule } from 'jw-angular-pagination';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GetQuizComponent,
    ViewQuizComponent,
    ReviewResultComponent,
    LoginComponent,
    IndexPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,AppRouting,FormsModule,JwPaginationModule
  ],
  providers: [QuizServiceService,ReviewResultComponent,LoginRoutingGuard],
  bootstrap: [IndexPageComponent]
})
export class AppModule { }
