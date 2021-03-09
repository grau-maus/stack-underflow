const express = require('express')
const router = express.Router()
const { asyncHandler, csrfProtection, csrf } = require('./utils')
const {check, validationResult } = require('express-validator'); // a method we get for free when we use express-valid.  w/ever is in the req, that that is valid info. and if invalid, errors will be pushed into the validations erros arraydo i need validation res
const app = require('../app');
const db = require('../db/models')
const { loginUser } = require('../auth')
const bcrypt = require('bcrypt')

const loginValidators = [
    check('email')  //by default checks @
        .exists({ checkFalsey: true})
        .withMessage('You did not enter a valid email'),
    check('password')
        .exists({checkFalsey: true})
        .withMessage('The necros do not approve of this password')
];

router.get('/login-form', csrfProtection, asyncHandler(async(req, res) => {
    res.render('login', {
        title: 'Login',
        csrfToken: req.csrfToken()
    })
}))

router.post('/login', csrfProtection, loginValidators, asyncHandler(async(req, res) => {
  const { email, password } = req.body
  // we need validation errors to check validation results(req)
  const validationErrors = validationResult(req);       // array that we'll handle each of them on  line 53
  console.log(validationErrors);
  let errors = [];

if (validationErrors.isEmpty()) {
  const user = await db.User.findOne({ where: { username } });
  if (user) {
    const isValid = await bcrypt.compare(      // comparing what the person inputed w/the hashedP
      password,
      user.hashedPassword.toString()
  );
    if (isValid) {
      loginUser(req, res, user);
      return req.session.save((e) => {
        console.log(e);
        res.redirect('/');
    });
    } else {
      errors.push('Username password combination not valid');
    }
  } else {
    errors.push('Username password combination not valid');
  }
} else {   //if not empty
  // errors.push("something")
  errors = validatorErrors.array().map((error) => error.msg);    //only the validatorErrors
  console.log(errors)
  res.render('login-form', {
    errors,
    csrfToken: req.csrfToken(),
    username
  })
}
}));

module.exports = router;
