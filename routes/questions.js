// ./routes/questions.js

const express = require('express');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
const { Question, Answer, User, Vote } = db;
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router();

router.get('/questions/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await Question.findByPk(questionId, {
        include: {
            model: User,
            model: Answer,
            model: Vote
        }
    });

    res.render('questions-single', { title: question.title, question });
}));

router.get('/questions', asyncHandler(async (req, res) => {
    const questions = await Question.findAll({
        include: User
    });

    const answers = await Answer.findAll({
        include: Question
    });
    res.render('questions', { title: 'Questions', questions, answers });
}));


module.exports = router;
