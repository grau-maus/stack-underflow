// COPY AND PASTE ONTO dbdiagram.io/d TO VIEW AND EDIT THE TABLES

// Creating tables
Table users {
  id int [pk] // auto-increment
  username string [not null]
  email string [not null, unique]
  hashedPassword string [not null]
  created_at timestamp [not null]
  updated_at timestamp [not null]
}

Table questions {
  id int [pk]
  content text [not null]
  userId int [not null]
  created_at timestamp [not null]
  updated_at timestamp [not null]
}

Table answers {
  id int [pk]
  content text [not null]
  userId int [not null]
  questionId int [not null]
  created_at timestamp [not null]
  updated_at timestamp [not null]
}

Table votes {
  id int [pk]
  userId int [not null]
  questionId int [not null]
  answerId int [not null]
}

// Creating references
// You can also define relaionship separately
// > many-to-one; < one-to-many; - one-to-one
 Ref: users.id < questions.userId
 Ref: users.id < answers.userId
 Ref: users.id < votes.userId
 Ref: questions.id < answers.questionId
 Ref: questions.id < votes.questionId
 Ref: answers.id < votes.answerId
