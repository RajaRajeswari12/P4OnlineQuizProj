package com.onlineQuiz.OnlineQuizRest.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlineQuiz.OnlineQuizRest.models.Answer;
import com.onlineQuiz.OnlineQuizRest.models.Question;
import com.onlineQuiz.OnlineQuizRest.models.Quiz;
import com.onlineQuiz.OnlineQuizRest.models.User;
import com.onlineQuiz.OnlineQuizRest.repository.AnswerRepository;
import com.onlineQuiz.OnlineQuizRest.repository.QuestionRepository;
import com.onlineQuiz.OnlineQuizRest.repository.QuizRepository;
import com.onlineQuiz.OnlineQuizRest.repository.UserRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/quiz/online")
public class QuizController {
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private QuestionRepository questionRepository;
	
	@Autowired
	private QuizRepository quizRepository;
	
	@Autowired
	private AnswerRepository answerRepository;
	
	@Autowired
	private UserRepository userRepository;
	

	@GetMapping("/quiz/{quizId}")
	public List<Question> getAllQuestionByQuizId(@PathVariable(value="quizId") int quizId){
		List<Question> questList = questionRepository.findByQuizId(quizId);
		logger.info(questList.toString());
		return questList;
	}
	
	@PostMapping("/quiz")
	public ResponseEntity<Question> createQuestion(@RequestBody Question question){
	
		return ResponseEntity.ok().body(questionRepository.save(question));
	}
	
	@PostMapping("/onlineQuiz")
	public ResponseEntity<Quiz> createQuiz(@RequestBody Quiz quiz){		
		return ResponseEntity.ok().body(quizRepository.save(quiz));
	}
	

	@PostMapping("/answer")
	public ResponseEntity<Answer> createAnswer(@RequestBody Answer answer){
		answerRepository.save(answer);
		return ResponseEntity.ok().body(answer);
	}
	
	@GetMapping("/quiz/answer/{quizId}")
	public ResponseEntity<List<Answer>> getAnswer(@PathVariable(value="quizId") int quizId){
	
		return ResponseEntity.ok().body(answerRepository.findAnsByQuizId(quizId));
	}
	
	@GetMapping("/quiz/user/{uname}")
	public ResponseEntity<User> getUserDetail(@PathVariable(value="uname") String userName){
		logger.info("USERNAME ******"+userName);
		return  ResponseEntity.ok().body(userRepository.findUserByUserName(userName));
	}
	
	@PostMapping("/quiz/user")
	public ResponseEntity<User> createUser(@RequestBody User user){
		
		return ResponseEntity.ok().body(userRepository.save(user));
	}
		

}
