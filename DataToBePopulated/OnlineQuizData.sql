create database onlinequiz;

use onlinequiz;
select * from quiz;
select * from question;
select * from answer;

select * from user;

delete from answer where ans_id = 1;

insert into quiz(quiz_id,quiz_name) values(1,'Java');

insert into user(userid,user_name,password) values(1,'Default','12345678');

insert into question(quest_id,quiz_id,quiz_question,answer_option1,answer_option2,answer_option3,answer_option4)
values (1,1," What is the size of double variable?",'8','16','32','64');

insert into question(quest_id,quiz_id,quiz_question,answer_option1,answer_option2,answer_option3,answer_option4)
values (2,1," What is the default value of short variable?",'0.0','16','0','undefined');

insert into question(quest_id,quiz_id,quiz_question,answer_option1,answer_option2,answer_option3,answer_option4)
values (3,1,"  Which of the following is true about public access modifier?",
'Variables, methods and constructors which are declared public can be accessed by any class lying in same package.',
'Variables, methods and constructors which are declared public in the superclass can be accessed only by its child class.',
'Variables, methods and constructors which are declared public can be accessed by any class.',
'None of the above.');

insert into question(quest_id,quiz_id,quiz_question,answer_option1,answer_option2,answer_option3,answer_option4)
values (4,1," What is Encapsulation?",
'Encapsulation is a technique to define different methods of same type.',
'Encapsulation is the ability of an object to take on many forms.',
'Encapsulation is the technique of making the fields in a class private and providing access to the fields via public methods.',
'None of the above.');

insert into question(quest_id,quiz_id,quiz_question,answer_option1,answer_option2,answer_option3,answer_option4)
values (5,1," What is TreeSet Interface?",
'It is a Set implemented when we want elements in a tree based order.',
'It is a Set implemented when we want elements in a sorted order.',
' It is a Set implemented when we want elements in a binary tree format.',
'It is a Set implemented when we want elements in a hiearchical order.');

insert into question(quest_id,quiz_id,quiz_question,answer_option1,answer_option2,answer_option3,answer_option4)
values (6,1,"What is function overloading?",
'Methods with same name but different parameters.',
'Methods with same name but different return types.',
'Methods with same name, same parameter types but different parameter names.',
'None of the above.');

insert into question(quest_id,quiz_id,quiz_question,answer_option1,answer_option2,answer_option3,answer_option4)
values (7,1,"What is Serialization?",
'Serialization is the process of writing the state of an object to another object.',
'Serialization is the process of writing the state of an object to a byte stream.',
'Both of the above.',
'None of the above.');

insert into question(quest_id,quiz_id,quiz_question,answer_option1,answer_option2,answer_option3,answer_option4)
values (8,1," What is runtime polymorphism?",
'Runtime polymorphism is a process in which a call to an overridden method is resolved at runtime rather than at compile-time.',
'Runtime polymorphism is a process in which a call to an overloaded method is resolved at runtime rather than at compile-time.',
'Both of the above.',
'None of the above.');

insert into question(quest_id,quiz_id,quiz_question,answer_option1,answer_option2,answer_option3,answer_option4)
values (9,1," When finally block gets executed?",
'Always when try block get executed, no matter exception occured or not.',
'Always when a method get executed, no matter exception occured or not.',
'Always when a try block get executed, if exception do not occur.',
'Only when exception occurs in try block code.');

insert into question(quest_id,quiz_id,quiz_question,answer_option1,answer_option2,answer_option3,answer_option4)
values (10,1,"What guarantees type-safety in a collection?",
'Generics',
'Abstract classes',
'Interfaces',
'Collection');



insert into answer(ans_id,quest_id,quiz_answer) 
values(1,1,'64 bit');

insert into answer(ans_id,quest_id,quiz_answer) 
values(2,2,'0.0');

insert into answer(ans_id,quest_id,quiz_answer) 
values(3,3,' Variables, methods and constructors which are declared public can be accessed by any class.');

insert into answer(ans_id,quest_id,quiz_answer) 
values(4,4,'Encapsulation is the technique of making the fields in a class private and providing access to the fields via public methods.');

insert into answer(ans_id,quest_id,quiz_answer) 
values(5,5,'It is a Set implemented when we want elements in a sorted order.');

insert into answer(ans_id,quest_id,quiz_answer) 
values(6,6,'Methods with same name but different parameters.');

insert into answer(ans_id,quest_id,quiz_answer) 
values(7,7,' Serialization is the process of writing the state of an object to a byte stream.');

insert into answer(ans_id,quest_id,quiz_answer) 
values(8,8,'Runtime polymorphism is a process in which a call to an overridden method is resolved at runtime rather than at compile-time.');

insert into answer(ans_id,quest_id,quiz_answer) 
values(9,9,'Always when try block get executed, no matter exception occured or not.');

insert into answer(ans_id,quest_id,quiz_answer) 
values(10,10,'Generics');



