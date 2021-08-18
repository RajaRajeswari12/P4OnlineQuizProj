import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizAnswer } from '../models/quizAnswer';
import { QuizQuestion } from '../models/QuizQuestion';
import { QuizServiceService } from '../quiz-service.service';

@Component({
  selector: 'app-review-result',
  templateUrl: './review-result.component.html',
  styleUrls: ['./review-result.component.css']
})
export class ReviewResultComponent implements OnInit {
  quizQuestForm: FormGroup
  QuizAns: QuizAnswer
  quizAnswerList: QuizAnswer[] = new Array<QuizAnswer>();
  QuestList: QuizQuestion[] = new Array<QuizQuestion>();



  constructor(private route: ActivatedRoute, private router: Router, private quizService: QuizServiceService) { }

  ngOnInit(): void {
  }

  setQuizAnswer(quizAnswerDB, questionId, quizId) {
    this.QuestList.find(x => x.questId === questionId && x.quiz.quizId === quizId).quizCorrectAnswer = quizAnswerDB;

  }

  loadUserQuizAnswer(quizAnswerList: QuizAnswer[]) {
    for (let index = 0; index < quizAnswerList.length; index++) {
      this.QuizAns = quizAnswerList[index];
      console.log(`QUIZ ANSWER LIST ${this.QuizAns.quizAnswer},${this.QuizAns.question.questId},${this.QuizAns.question.quiz.quizId}`)
      this.setQuizAnswer(this.QuizAns.quizAnswer, this.QuizAns.question.questId, this.QuizAns.question.quiz.quizId)
    }
    return this.QuestList;
  }

  loadResult(quizId, quizQuestList: QuizQuestion[], quizAnswerList: QuizAnswer[]): QuizQuestion[] {
    console.log("Inside LOAD RESULT")

    this.QuestList = quizQuestList
    this.loadUserQuizAnswer(quizAnswerList);


    this.QuestList.forEach(function (value) {
      console.log("Updated List");
      console.log(value)
    })

    return this.QuestList
  }

}
