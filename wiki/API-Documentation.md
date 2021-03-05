# API-Routes

This web app uses the following API routes to dynamically update the page to create a single-page-app-like feel for the user for specific features.

## Questions

* A logged in user may delete one of their own questions, removing it from the list of visible questions without causing a refresh/redirect.

  * `DELETE /api/questions/:id`

## Answers

* A logged in user may delete one of their own answers, removing it from the list of visible answers without causing a refresh/redirect.

  * `DELETE /api/answers/:id`

## Votes

* A logged in user can upvote answers or downvote questions with visible confirmation without causing a refresh/redirect.
  
  * `POST /api/questions/:id/downvotes`
  * `POST /api/answers/:id/upvotes`
  * `DELETE /api/questions/:id/downvotes`
  * `DELETE /api/answers/:id/upvotes`
