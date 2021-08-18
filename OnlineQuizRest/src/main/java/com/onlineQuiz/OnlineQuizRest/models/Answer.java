package com.onlineQuiz.OnlineQuizRest.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@NamedQueries({
	@NamedQuery(name="Answer.findAnsByQuizId",query="select ans from Answer ans where ans.question.quiz.quizId = ?1")
})
public class Answer {

	@Id
	@GeneratedValue
	private int ansId;
	
	@OneToOne(targetEntity = Question.class)
	@JoinColumn(name="questId",referencedColumnName = "questId")
//	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	private Question question;
	

	private String quizAnswer;

	public Answer(int ansId, Question question,  String quizAnswer) {
		super();
		this.ansId = ansId;
		this.question = question;
		this.quizAnswer = quizAnswer;
	}

	public Answer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getAnsId() {
		return ansId;
	}

	public void setAnsId(int ansId) {
		this.ansId = ansId;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}



	public String getQuizAnswer() {
		return quizAnswer;
	}

	public void setQuizAnswer(String quizAnswer) {
		this.quizAnswer = quizAnswer;
	}

	@Override
	public String toString() {
		return "Answer [ansId=" + ansId + ", question=" + question + ", quizAnswer=" + quizAnswer + "]";
	}
	
	
}
