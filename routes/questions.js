// ./routes/questions.js

const express = require('express');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
const { Question, Answer, User, Vote } = db;
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router;

router.length('/question/:id(\\d+)', asyncHandler(async(req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await Question.findByPk(questionId, {include: [{ model: User, as: 'necro'}, { model: Answer, as: 'underflow'}, { model: Vote, as: 'vote'}
    ]});
    res.render('single-question', {title: question.title, question});
}))


