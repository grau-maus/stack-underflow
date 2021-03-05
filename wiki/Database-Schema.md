# **Database Schema**

## `users`

| column name | data type | details                   |
|-------------|-----------|---------------------------|
| id          | integer   | not null, primary key     |
| username    | string    | not null, unique          |
| email       | string    | not null, indexed, unique |
| password    | string    | not null                  |
| created_at  | datetime  | not null                  |
| updated-at  | datetime  | not null                  |

* index on `email, unique: true`

## `questions`

| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| content     | string    | not null              |
| userId      | integer   | not null, foreign key |
| created_at  | datetime  | not null              |
| updated-at  | datetime  | not null              |

* `userId` references `users` table

## `answers`

| column name   | data type | details               |
|---------------|-----------|-----------------------|
| id            | integer   | not null, primary key |
| content       | string    | not null              |
| userId        | integer   | not null, foreign key |
| questionId    | integer   | not null, foreign key |
| created_at    | datetime  | not null              |
| updated-at    | datetime  | not null              |

* `userId` references `users` table
* `questionId` references `questions` table

## `votes`

| column name   | data type | details                        |
|---------------|-----------|--------------------------------|
| id            | integer   | not null, primary key          |
| userId        | integer   | not null, indexed, foreign key |
| questionId    | integer   | indexed, foreign key           |
| answerId      | integer   | indexed, foreign key           |

* `userId` references `users` table
* `questionId` references `questions` table
* `answerId` references `answers` table
* Unique index on `[userId, questionId]`
* Unique index on `[userId, answerId]`
