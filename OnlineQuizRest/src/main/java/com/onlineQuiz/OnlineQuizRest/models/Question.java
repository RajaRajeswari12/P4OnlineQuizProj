package com.onlineQuiz.OnlineQuizRest.models;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Transient;



@Entity
@NamedQueries(value= {
		@NamedQuery(name="Question.findByQuizId",query="select quest from Question quest where quest.quiz.quizId = ?1 ")
})
public class Question {
	
	@Id
	@GeneratedValue
	private int questId;
	
	@ManyToOne(targetEntity = Quiz.class)
	@JoinColumn(name="quizId",referencedColumnName = "quizId")
	private Quiz quiz;
	
	@Column(unique=true)
	private String quizQuestion;
	
	private String answerOption1;
	
	private String answerOption2;
	
	private String answerOption3;
	
	private String answerOption4;
	

	
	

	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Question(int questId, Quiz quiz, String quizQuestion, String answerOption1, String answerOption2,
			String answerOption3, String answerOption4) {
		super();
		this.questId = questId;
		this.quiz = quiz;
		this.quizQuestion = quizQuestion;
		this.answerOption1 = answerOption1;
		this.answerOption2 = answerOption2;
		this.answerOption3 = answerOption3;
		this.answerOption4 = answerOption4;
	}

	public int getQuestId() {
		return questId;
	}

	public void setQuestId(int questId) {
		this.questId = questId;
	}

	public Quiz getQuiz() {
		return quiz;
	}

	public void setQuiz(Quiz quiz) {
		this.quiz = quiz;
	}

	public String getQuizQuestion() {
		return quizQuestion;
	}

	public void setQuizQuestion(String quizQuestion) {
		this.quizQuestion = quizQuestion;
	}

	public String getAnswerOption1() {
		return answerOption1;
	}

	public void setAnswerOption1(String answerOption1) {
		this.answerOption1 = answerOption1;
	}

	public String getAnswerOption2() {
		return answerOption2;
	}

	public void setAnswerOption2(String answerOption2) {
		this.answerOption2 = answerOption2;
	}

	public String getAnswerOption3() {
		return answerOption3;
	}

	public void setAnswerOption3(String answerOption3) {
		this.answerOption3 = answerOption3;
	}

	public String getAnswerOption4() {
		return answerOption4;
	}

	public void setAnswerOption4(String answerOption4) {
		this.answerOption4 = answerOption4;
	}
	
	@Override
	public String toString() {
		return "Question [questId=" + questId + ", quiz=" + quiz + ", quizQuestion=" + quizQuestion + ", answerOption1="
				+ answerOption1 + ", answerOption2=" + answerOption2 + ", answerOption3=" + answerOption3
				+ ", answerOption4=" + answerOption4  + "]";
	}
	
	
	
}
