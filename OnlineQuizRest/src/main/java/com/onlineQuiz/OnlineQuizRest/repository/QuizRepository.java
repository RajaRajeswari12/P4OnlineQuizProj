package com.onlineQuiz.OnlineQuizRest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineQuiz.OnlineQuizRest.models.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Integer>{

}
