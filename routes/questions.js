// ./routes/questions.js

const express = require('express');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
const question = require('../db/models/question');
const { Question, Answer, User, Vote } = db;
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router();

router.get('/questions/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await Question.findByPk(questionId, {
        include: [User, Answer, Vote]
    });

    // get user id from session request(?) please double check
    const userId = req.session.id;

    const hasVoted = questions.Votes.userId.includes(userId);

    res.render('questions-single', { title: question.title, question, hasVoted });
}));

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


router.post('/questions/:id/answers', csrfProtection, asyncHandler(async (req, res) => {
    const { content } = req.body;
    // csrfToken = req.csrfToken()
}));


router.post('/questions/:id', csrfProtection, asyncHandler(async(req, res) => {

    //await newQuestion.save();
    const question = await Question.findByPk()

    const {
        questionId,
        questionTitle,
        content,
    } = req.body
    res.redirect(`/questions/${newQuestion.id}`)
}))

// no review functionality MVP
router.get('/questions/form', csrfProtection, asyncHandler(async(req, res) => {
    const question = db.Question.build();
    res.render('questions-ask-form', {
        csrfToken: req.csrfToken()
    })

}));

const questionValidators = [
    check('questionTitle')
        .exists( {checkFalsy: true })
        .withMessage("Please provide a question")
        .isLength( { min: 15, max: 100 })
        .withMessage("Question title needs to be between 15 - 255 characters."),
    check('content')
        .exists( { checkFalsy: true })
        .withMessage("Body is missing")
        .isLength( { min: 50 })
]

router.post('/questions/form', csrfProtection, questionValidators, asyncHandler(async(req, res) => {
    const {
        questionTitle,
        content,
    } = req.body

    const newQuestion = Question.build({
        questionTitle,
        content,
    });

    const validatorErrors = questionValidators(req)

    if(validatorErrors.isEmpty()){
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
}))
module.exports = router;
