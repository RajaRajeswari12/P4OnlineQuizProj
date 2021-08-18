package com.onlineQuiz.OnlineQuizRest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.onlineQuiz.OnlineQuizRest.models.Question;
import com.onlineQuiz.OnlineQuizRest.models.Quiz;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer>{


	List<Question> findByQuizId(int quizId);
	
}
