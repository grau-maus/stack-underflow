# /login
This page displays login.

*  Get /login
*  Post /login
*  GET /demo
*  POST /demo

# /signup
This page displays signup.

*  GET /signup
*  POST /signup

# /
This page displays most recent Questions and Votes, as wells as the navigation bar with search and login/signup/demo buttons. Logged in users can also Vote on questions. 

* GET /
* GET /search
* POST /questions/:id/downVotes
* DELETE /questions/:id/downVotes

# /questions
This page displays a form which a logged in user can craft a new Underflow Question, as well as a navigation bar with search and login/signup buttons. (No logout! You can never leave the Underflow!)

* POST /questions

# /questions/:id
This page displays the individual questions with all associated Answers and Votes. Will also display search, login/signup and fake logout (redirects to homepage). If logged in user owns Question this page also displays update, delete and answer button. 

* GET /questions/:id
* POST /questions/:id/downVotes
* DELETE /questions/:id/downVotes
* POST /questions/:id/answers
* POST /answers/:id/upVotes
* DELETE /answers/:id/upVotes 


