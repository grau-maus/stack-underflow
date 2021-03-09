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
  const validatorErrors = validationResult(req);          // array that we'll handle each of them on  line 53

  console.log(validatorErrors);
  let errors = [];

if (validatorErrors.isEmpty()) {
  const user = await db.User.findOne({ where: { email } });
  if (user !== null) {    // if the user exists in our db
    const isValid = await bcrypt.compare(                  // comparing what the person inputed w/the hashedP
      password,
      user.hashedPassword.toString()
  );
    if (isValid) {           // if the password and hashed match
      loginUser(req, res, user);
      return res.redirect('/')
    }
    errors.push("The underflow has no use for you. Email address and password failed.")

  }
} else {   //if not empty

  errors = validatorErrors.array().map((error) => error.msg);    //only the validatorErrors
  console.log(errors)
  res.render('login-form', {
    title: 'Login',  
    errors,
    csrfToken: req.csrfToken(),
    email

  })
}
}));

module.exports = router;
