package com.onlineQuiz.OnlineQuizRest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineQuiz.OnlineQuizRest.models.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	
	User findUserByUserName(String userName);

}
