import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRoutingGuard } from '../loginRouting.service';
import { User } from '../models/User';
import { QuizServiceService } from '../quiz-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  uname: FormControl
  passwd: FormControl
  user: User = new User();
  authorizedUser = false;
  invalidUser = false;

  createForm() {
    this.loginForm = new FormGroup({
      uname: this.uname,
      passwd: this.passwd
    })
  }

  createFormControl() {
    this.uname = new FormControl('', Validators.required)
    this.passwd = new FormControl('', Validators.required)
  }

  constructor(private router: Router, private routingGuar: LoginRoutingGuard, private quizService: QuizServiceService) {
    this.createFormControl()
    this.createForm()
  }

  ngOnInit(): void {

  }

  async validateLogin() {

  const User = <User>await this.quizService.getUserDetail(this.uname.value)
  this.user = User;
      if (this.routingGuar.validateLoginCredential(this.user, this.uname.value, this.passwd.value)) {
        this.goToGetQuizPage()
      } else {
        this.loginForm.reset();
        this.invalidUser = true;
      }
    }
  

  goToGetQuizPage() {
    this.router.navigate(['getQuiz']);
  }

}
