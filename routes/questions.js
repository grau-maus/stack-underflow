// ./routes/questions.js

const express = require('express');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
const question = require('../db/models/question');
const { Question, Answer, User, Vote } = db;
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router();

// ROUTE FOR DISPLAYING ALL QUESTIONS
router.get('/questions', csrfProtection, asyncHandler(async (req, res) => {
    const questions = await Question.findAll({
        include: [User, Answer, Vote]

    });

    res.render('questions', {
        title: 'Questions',
        questions,
        csrfToken: req.csrfToken()
    });
}));

// ROUTE FOR DISPLAYING ONE SINGLE QUESTION
// POSTS TO '/questions/:id/answers'
router.get('/questions/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await Question.findByPk(questionId, {
        include: [User, Answer, Vote]
    });

    // get user id from session request
    const userId = req.session.auth.userId;

    res.render('questions-single', {
        title: question.title,
        question,
        csrfToken: req.csrfToken()
    });
}));

const answerValidator = [
    check('content')
        .exists({ checkFalsy: true })
        .withMessage("Body is missing")
];

// ROUTE FOR CREATING AN ANSWER FOR THE CURRENT QUESTION
// REDIRECTS TO '/questions/:id'
router.post('/questions/:id(\\d+)/answers', csrfProtection, answerValidator, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const {
        answerContent,
    } = req.body;
    const newAnswer = Answer.build({
        content: answerContent,
        userId: req.session.auth.userId,
        questionId,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    await newAnswer.save();

    res.redirect(`/questions/${questionId}`)
}));

router.post('/questions/:id', csrfProtection, asyncHandler(async (req, res) => {

    //await newQuestion.save();
    const question = await Question.findByPk()

    const {
        questionId,
        questionTitle,
        content,
    } = req.body
    res.redirect(`/questions/${newQuestion.id}`)
}))

router.get('/questions/form', csrfProtection, asyncHandler(async (req, res) => {
    const question = db.Question.build();
    res.render('questions-ask-form', {
        csrfToken: req.csrfToken()
    })

}));

const questionValidators = [
    check('questionTitle')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a question")
        .isLength({ min: 15, max: 255 })
        .withMessage("Question title needs to be between 15 - 255 characters."),
    check('content')
        .exists({ checkFalsy: true })
        .withMessage("Content is missing")
        .isLength({ min: 50 })
        .withMessage("Question content must be at least 50 characters.")
]

router.post('/questions/form', csrfProtection, questionValidators, asyncHandler(async (req, res) => {
    const {
        questionTitle,
        content,
    } = req.body

    const newQuestion = Question.build({
        questionTitle,
        content,
    });

    const validatorErrors = questionValidators(req)

    if (validatorErrors.isEmpty()) {
        await newQuestion.save();
        res.redirect('/questions/:id')    //we will have this :id from the build & save
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);

        res.render('/questions-ask-form', {
            questionTitle,
            content,
            errors,
            csrfToken: req.csrfToken(),
        });
    }
}));

// ROUTE FOR DOWNVOTING QUESTIONS
router.post('/questions/:id/downvote', csrfProtection, asyncHandler(async (req, res) => {
    // get questionId from url
    const questionId = req.params.id;

    // get userId from req.session
    const userId = req.session.auth.userId;

    // get a single vote object with the provided values
    const vote = await Vote.findOne({ where: [{ questionId }, { userId }] });

    if (!vote) {
        // create new vote object with specific
        // values
        const downvoted = Vote.build({
            userId,
            questionId
        });

        // save created vote object in database
        await downvoted.save();
    } else {
        // remove vote object from database
        await vote.destroy();
    }

    // redirect user to the specific question because
    // the current url is: '/questions/:id/downvote'
    res.redirect(`/questions/${questionId}`);
}));

// ROUTE FOR UPVOTING ANSWERS
router.post('/questions/:questionId/answer/:answerId', csrfProtection, asyncHandler(async (req, res) => {
    const questionId = req.params.questionId;
    const answerId = req.params.answerId;
    const userId = req.session.auth.userId;
    const vote = await Vote.findOne({ where: [{ answerId }, { userId }] });

    if (!vote) {
        const upvoted = Vote.build({
            userId,
            answerId
        });

        await upvoted.save();
    } else {
        await vote.destroy();
    }

    // redirect user to the specific question because
    // the current url is: '/questions/:questionId/answer/:answerId'
    res.redirect(`/questions/${questionId}`);
}));

module.exports = router;
