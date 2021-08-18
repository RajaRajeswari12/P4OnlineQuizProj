package com.onlineQuiz.OnlineQuizRest.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Quiz {

	@Id
	@GeneratedValue
	private int quizId;
	
	@Column(unique=true)
	private String quizName;
	
//	@OneToMany(mappedBy = "Question")
//	private Question question;
	
	

	public Quiz(int quizId, String quizName) {
		super();
		this.quizId = quizId;
		this.quizName = quizName;
//		this.question = question;
	}

	public Quiz() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getQuizId() {
		return quizId;
	}

	public void setQuizId(int quizId) {
		this.quizId = quizId;
	}

	public String getQuizName() {
		return quizName;
	}

	public void setQuizName(String quizName) {
		this.quizName = quizName;
	}

//	public Question getQuestion() {
//		return question;
//	}
//
//	public void setQuestion(Question question) {
//		this.question = question;
//	}

	@Override
	public String toString() {
		return "Quiz [quizId=" + quizId + ", quizName=" + quizName + "]";
	}
	
	
	
}
