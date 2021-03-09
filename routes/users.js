const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator'); // do i need validation res
const { csrfProtection, asyncHandler } = require('./utils');
const app = require('../app');

// we'll need signup validators, questions & answers validators
const loginValidators = [
    check('email')
        .exists({ checkFalsey: true })
        .withMessage('You did not enter a valid email'),
    check('password')
        .exists({ checkFalsey: true })
        .withMessage('The necros do not approve of this password')
];

router.get('/login', csrfProtection, asyncHandler(async (req, res) => {
    res.render('login', {
        title: 'Login',
        csrfToken: req.csrfToken()
    })
}))

// router.post('/login')
module.exports = router;
