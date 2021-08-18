import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User';


@Component({
  selector: 'app-get-quiz',
  templateUrl: './get-quiz.component.html',
  styleUrls: ['./get-quiz.component.css']
})
export class GetQuizComponent implements OnInit {

  quizForm:FormGroup
  quizId:FormControl
 
  invalidQuizBoolean :boolean 

  createForm(){
    this.quizForm = new FormGroup({
      quizId:this.quizId
    })
  }

  createFormControls(){
    this.quizId = new FormControl('',Validators.required)
  }

  constructor(private router:Router,private route:ActivatedRoute) { 
    this.createFormControls();
    this.createForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
       this.invalidQuizBoolean = data.invalidQuiz     
    })
  }

  OnSubmit(){   
    this.goToViewQuiz(this.quizForm.value);
  }

  goToViewQuiz(formDetail:{quizId}){
    console.log(formDetail.quizId);
    this.router.navigate(['viewQuiz',formDetail.quizId])
  }
}
