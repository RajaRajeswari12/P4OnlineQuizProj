import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { QuizQuestion } from '../models/QuizQuestion';
import { QuizServiceService } from '../quiz-service.service';
import { QuizAnswer } from '../models/quizAnswer';
import { ReviewResultComponent } from '../review-result/review-result.component';

@Component({
  selector: 'app-view-quiz',
  templateUrl:'./view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {

  quizQuestForm: FormGroup
  quizId

  QuizQuest: QuizQuestion;
  QuizAns: QuizAnswer

   quizQuestList: QuizQuestion[] = new Array<QuizQuestion>();
  quizAnswerList: QuizAnswer[] = new Array<QuizAnswer>();

  marksScored = 0;
  TotalMarks = 0
 
  pageOfItems: Array<QuizQuestion>;

  enableResult = false;
  disableOption = false;
  disableSubmit = true;
  invalidQuizId = false;

  constructor(private route: ActivatedRoute, private router: Router, private quizService: QuizServiceService,
    private reviewResult: ReviewResultComponent) { }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['quizId'];
    if(this.quizQuestList.length == 0){
      this.loadQuizQuestion();    
    }
   
  }


  async loadQuizQuestion() {
    const QuizLis = <QuizQuestion[]> await this.quizService.getQuizQuest(this.quizId);
    if (QuizLis.length > 0) {
             this.quizQuestList = QuizLis
          } else {
            this.invalidQuizId = true;
            this.goToGetQuiz();
          }
  }

  async loadQuizAnswer(quizId) {
    const quizAnsLst = <QuizAnswer[]> await this.quizService.getQuizAns(quizId)
    this.quizAnswerList = quizAnsLst
  }

  async onQuizSubmit() {
    await this.loadQuizAnswer(this.quizId);
    this.disableSubmit = true;
    this.disableOption = true;
    this.enableResult = true;
    this.quizQuestList = this.reviewResult.loadResult(this.quizId, this.quizQuestList, this.quizAnswerList)
    this.evaluateQuiz(this.quizQuestList);
  }

  onAnswerSelection(selectedOption, selectedquestionID) {
    this.quizQuestList.find(x => x.questId === selectedquestionID).quizUserAnswer = selectedOption;
    if(!this.quizQuestList.find( x=>x.quizUserAnswer == null)){
      this.disableSubmit = false;
    }
  }

  evaluateQuiz(quizQuestList: QuizQuestion[]) {
    for (let index = 0; index < quizQuestList.length; index++) {
      this.TotalMarks++;
      this.QuizQuest = quizQuestList[index];      
      if (this.QuizQuest.quizUserAnswer === this.QuizQuest.quizCorrectAnswer) {
        this.marksScored++;
      }
    }
  }
  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  goToGetQuiz() {
    this.router.navigate(['/getQuiz',{invalidQuiz:true}]);
  }

}
