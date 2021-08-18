package com.onlineQuiz.OnlineQuizRest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineQuiz.OnlineQuizRest.models.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Integer>{
	
	List<Answer> findAnsByQuizId(int quizId);

}
