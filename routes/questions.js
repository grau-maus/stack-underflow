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

    res.render('questions', { title: 'Questions', questions });
}));

router.post('/questions/:id/answers', asyncHandler(async (req, res) => {
    const { content } = req.body;
}));


module.exports = router;
