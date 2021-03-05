# User Stories

## Userss

### Sign Up

* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the `/signup` page:
    * I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

### Log in

* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I'm on the `/login` page:
    * I would like to be able to enter my email and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the log-in form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the log-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

### Demo User

* As an unregistered and unauthorized user, I would like an easy to find and clear button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
  * When I'm on either the `/signup` or `/login` pages:
    * I can click on a Demo User button to log me in and allow me access as a normal user.
      * So that I can test the site's features and functionality without needing to stop and enter credentials.

### Log Out

* As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
  * When I'm on any page of the site:
    * I can log out of my account and be redirected to a page displaying recent questions.
      * So that I can easily log out to keep my information secure.

### Ask Questions

* As a logged in user, I want to be able to post a new question.
  * When I'm on the `/ask-question` page:
    * I can write and submit a new question.
      * So I can view the 10 most recent posts.

### Answering Questions

* As a logged in user, I want to be able to answer any question
  * When I'm on the `/answer-question` page:
    * I can write and submit an answer, image URL, or code snippet on any question.

### Viewing Questions

* As a logged in or logged out user, I want to be able to view a selection of the most recent questions.
  * When I'm on the `/questions` page:
    * I can view the most recently posted questions.
      * So that I can read and interact with the thoughts and memes of the uber coders.

### Update Questions

* As a logged in user I want to be able to edit my questions by clicking an Edit button associated with the question anywhere that question appears.
  * When I'm on the `/questions`, `/questions/:id`, or `/users/:id/questions` pages:
    * I can click Edit to make permanent changes to questions I have posted
      * So that I can fix any spelling errors or regrettable or unintentional trolling I make in my questions.

### Deleting Questions and Answers

* As a logged in user I want to be able to delete my questions by clicking a Delete button associated with the question anywhere that question appears.
  * When I'm on the `/questions`, `/questions/:id`, or `/users/:id/questions` pages:
    * I can click Delete to make permanent changes to questions I have posted
      * So that when I realize I've been a dingleberry due to regrettable or unintentional trolling I make in my questions/answers I can easily remove it.

### Upvote/Downvote

* As a logged in user I want to be able to downvote questions or upvote answers
  * When I hover over the downvote option on the question
    * I can see 'This question belongs in the overflow, not the underflow!'
      * So that I know if the question is too silly to be in stack underflow.
  * When I hover over the upvote on the answer
    * I can see 'Nice one-liner, uber coder'
      * So that I pwned the uber coders.

### Search

* As a logged in/out user I want to be able to search for terms relating to my question
  * When I am on any page
    * I can use a search bar in the header
      * So that I can find the question I am looking for.
