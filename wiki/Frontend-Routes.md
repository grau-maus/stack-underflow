# User-facing routes

## `/login`

This page displays a login form.

*  `GET /login`
*  `POST /login`
*  `GET /demo`
*  `POST /demo`

## `/signup`

This page displays a signup form.

*  `GET /signup`
*  `POST /signup`

## `/`

This page displays the Questions and their Votes, as well as the navigation  and search bar, and login/signup/demo buttons. _Logged in users_ can also vote on questions.

* `GET /`
* `GET /search`
* `POST /questions/:id/downVotes`
* `DELETE /questions/:id/downVotes`

## `/questions`

This page displays a form with which a logged in user can craft a new Underflow Question, as well as a navigation and search bar, and login/signup buttons. _(No logout! You can never leave the Underflow!)_

* `POST /questions`

# `/questions/:id`

This page displays the individual Question with all of its associated Answers and Votes. It will also display the navigation and search bar, login/signup buttons, as well as a fake logout button that redirects to the homepage. And if the _logged in user_ owns the currently displayed Question, the page also renders an update, delete, and answer button.

* `GET /questions/:id`
* `POST /questions/:id/answers`
* `POST /questions/:id/downVotes`
* `DELETE /questions/:id/downVotes`
* `POST /answers/:id/upVotes`
* `DELETE /answers/:id/upVotes`
