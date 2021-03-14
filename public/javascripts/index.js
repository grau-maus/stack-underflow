const csrfToken = document.querySelector('[name="_csrf"]').value;







// DELETE ANSWER FUNCTION
const deleteAnswer = async (event) => {
  if (event.target.classList[0] !== 'single-question-answer-delete') return;

  // CODE FOR HEROKU
  const res = await fetch(`https://stacked-underflow.herokuapp.com/questions/answers/${event.target.id}`, {
    method: 'DELETE',
    headers: {
      'X-CSRF-TOKEN': csrfToken
    }
  });

  // // CODE FOR TESTING
  // const res = await fetch(`http://localhost:8080/questions/answers/${event.target.value}/delete`, {
  //   method: 'DELETE',
  //   headers: {
  //     'X-CSRF-TOKEN': csrfToken
  //   }
  // });

  const { answerId } = await res.json();
  const deleteAnswer = document.querySelector(`div#userId-${answerId}`);

  deleteAnswer.parentElement.removeChild(deleteAnswer);

  const answerCount = document.querySelectorAll('div.each-answer');
  let countLabel = '';

  if (answerCount === 1) {
    countLabel = `${answerCount.length} Answer:`;
  } else if (answerCount > 1) {
    countLabel = `${answerCount.length} Answers:`
  } else {
    countLabel = 'The necros have not answered this question.'
  }

  document.querySelector('.number-answers').innerHTML = countLabel;
};








// UPVOTE ANSWER FUNCTION
const upvoteAnswer = async (event) => {
  if (event.target.classList[0] !== 'single-question-upvote') return;

  const classList = event.target.classList;
  const classes = [];

  classList.forEach(attribute => {
    classes.push(attribute);
  });

  const questionId = parseInt(classes[1].split(':')[0], 10);
  const answerId = parseInt(classes[1].split(':')[1], 10);

  // CODE FOR HEROKU
  const res = await fetch(`https://stacked-underflow.herokuapp.com/questions/${questionId}/answer/${answerId}`, {
    method: 'POST',
    headers: {
      'X-CSRF-TOKEN': csrfToken
    }
  });


  // // CODE FOR LOCAL TESTING
  // const res = await fetch(`http://localhost:8080/questions/${questionId}/answer/${answerId}`, {
  //   method: 'POST',
  //   headers: {
  //     'X-CSRF-TOKEN': csrfToken,
  //   }
  // });

  const { votes } = await res.json();

  if (votes.length === 0) {
    document.querySelector(`.answerId-${answerId}`).innerText = votes.length;
  } else {
    document.querySelector(`.answerId-${answerId}`).innerText = `+ ${votes.length}`;
  }
};








document.addEventListener('click', event => {
  const classList = event.target.classList;
  const test = [];
  classList.forEach(attribute => {
    test.push(attribute);
  });

  // console.log(test);
  // console.log(event.target)
});














// -------------- EVENT LISTENERS -------------------------------------------------


// UPVOTE ANSWERS
document.querySelectorAll('.single-question-upvote').forEach(node => {
  node.addEventListener('click', upvoteAnswer);
});



// DELETE ANSWERS BY CURRENT USER
document.querySelectorAll('.single-question-answer-delete').forEach(node => {
  node.addEventListener('click', deleteAnswer);
});
