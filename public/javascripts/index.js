const csrfToken = document.querySelector('[name="_csrf"]').value;

// DELETE ANSWER FUNCTION
async function deleteAnswer(event) {
  if (event.target.classList[0] !== 'single-question-answer-delete') return;

  const ansId = parseInt(event.target.value);

  // CODE FOR HEROKU
  const res = await fetch(`https://stacked-underflow.herokuapp.com/questions/answers/${ansId}/delete`, {
    method: 'DELETE',
    headers: {
      'X-CSRF-TOKEN': csrfToken
    }
  });

  // // CODE FOR TESTING
  // const res = await fetch(`http://localhost:8080/questions/answers/${ansId}/delete`, {
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
}



async function addComment(event) {
  if (event.target.id === 'post-answer') {
    const textContent = document.querySelector('.single-question-answer-input');
    let questionId = Number(textContent.classList[1]);

    // CODE FOR HEROKU
    const res = await fetch(`https://stacked-underflow.herokuapp.com/questions/${questionId}/answers`, {
      method: 'POST',
      headers: {
        'X-CSRF-TOKEN': csrfToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ answerContent: textContent.value })
    });

    // // CODE FOR TESTING
    // const res = await fetch(`/questions/${questionId}/answers`, {
    //   method: 'POST',
    //   headers: {
    //     'X-CSRF-TOKEN': csrfToken,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ answerContent: textContent.value })
    // });

    let { newAnswer, author } = await res.json();

    // create a new node with all its respective children as seen in
    // the html tree. we could clone a node using '<< node >>.cloneNode(true / false)'
    // but what if there are no answers to clone?
    // DEEPEST NODE IN TREE <img>
    const voteImg = document.createElement('img');
    voteImg.classList.add('single-question-upvote', `${newAnswer.questionId}:${newAnswer.id}`);
    voteImg.setAttribute('src', '/images/upvote.png');

    const voteBtn = document.createElement('button');
    voteBtn.classList.add('question-body-answers-content');
    voteBtn.appendChild(voteImg);

    const csrfInput = document.createElement('input');
    csrfInput.setAttribute('type', 'hidden');
    csrfInput.setAttribute('name', '_csrf');
    csrfInput.setAttribute('value', `${csrfToken}`);

    const voteCountDiv = document.createElement('div');
    voteCountDiv.classList.add('single-question-upvote-count', `answerId-${newAnswer.id}`);
    voteCountDiv.innerText = 0;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('single-question-answer-delete');
    deleteBtn.setAttribute('value', `${newAnswer.id}`)
    deleteBtn.innerText = 'delete';

    const usernameP = document.createElement('p');
    usernameP.classList.add('single-question-answer-username');
    usernameP.innerText = `By: ${author.username}`;

    const answerDateP = document.createElement('p');
    answerDateP.classList.add('single-question-answer-date');
    answerDateP.innerText = `Answered: ${newAnswer.createdAt}`;

    const answerP = document.createElement('p');
    answerP.classList.add('single-question-answer-content');
    answerP.innerText = `${newAnswer.content}`;

    const answerDiv = document.createElement('div');
    answerDiv.classList.add('answer');
    answerDiv.appendChild(answerP);
    answerDiv.appendChild(answerDateP);
    answerDiv.appendChild(usernameP);
    answerDiv.appendChild(deleteBtn);

    const divForm = document.createElement('div');
    divForm.classList.add('single-answer-vote-form');
    divForm.appendChild(voteCountDiv);
    divForm.appendChild(csrfInput);
    divForm.appendChild(voteBtn);

    // PARENT <div>
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('each-answer');
    parentDiv.setAttribute('id', `userId-${newAnswer.id}`);
    parentDiv.appendChild(divForm);
    parentDiv.appendChild(answerDiv);

    // finally attach the block of answer to the container
    // containing all the answers
    document.querySelector('.question-body-answers').appendChild(parentDiv);
    deleteBtn.addEventListener('click', deleteAnswer);
  }
}






// UPVOTE ANSWER FUNCTION
async function upvoteAnswer(event) {
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
}











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

// POSTING AN ANSWER
document.querySelector('#post-answer').addEventListener('click', addComment);
