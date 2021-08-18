import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { QuizQuestion } from './models/QuizQuestion';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  private baseUrl = "http://localhost:8183/quiz/online/quiz";
  private answerUrl = this.baseUrl+'/answer';
  private userUrl = this.baseUrl+'/user';


  constructor(private httpClient:HttpClient) { }

  async getQuizQuest(quizId:number):Promise<any>{
    return await this.httpClient.get(`${this.baseUrl}/${quizId}`).toPromise();
  }

  async getQuizAns(quizId:number):Promise<any>{
    return await this.httpClient.get(`${this.answerUrl}/${quizId}`).toPromise()
  }

  async getUserDetail(uname:String):Promise<any>{
    return await this.httpClient.get(`${this.userUrl}/${uname}`).toPromise()
  }


  
}
