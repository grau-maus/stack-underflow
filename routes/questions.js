// ./routes/questions.js

const express = require('express');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
const { Question, Answer, User, Vote } = db;
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router;

router.get('/question/:id(\\d+)', asyncHandler(async(req, res) => {

    const questionId = parseInt(req.params.id, 10);
    const question = await Question.findByPk(questionId, {include: [{ model: User, as: 'user'}, { model: Answer, as: 'answer'}, { model: Vote, as: 'vote'}
    ]});
    res.render('questions-single', {title: question.title, question});
}))


