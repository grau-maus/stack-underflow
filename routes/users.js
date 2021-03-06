//- ./routes/user.js

const express = require('express')
const router = express.Router()
const { asyncHandler, csrfProtection, csrf } = require('./utils')
const { check, validationResult } = require('express-validator'); // a method we get for free when we use express-valid.  w/ever is in the req, that that is valid info. and if invalid, errors will be pushed into the validations erros arraydo i need validation res
const app = require('../app');
const db = require('../db/models');
const { User, Vote, Answer, Question } = db;
const { loginUser } = require('../auth')
const bcrypt = require('bcrypt');

//SIGN UP FORM
router.get('/signup', csrfProtection, (req, res) => {
  const {
    username,
    email,
    password,
  } = req.body;

  const user = User.build();
  res.render('signup-form', {
    title: 'Sign up',
    email,
    csrfToken: req.csrfToken()
  })
})

const userValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage("Please provide what we will call you in the underflow")
    .isLength({ max: 50 })
    .withMessage("Name must be no more than 50 characters"),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid email address")
    .isLength({ max: 255 })
    .withMessage("The underflow has deemed your email address way too long")
    .isEmail()
    .withMessage("Email address is not valid email")
    .custom((value) => {
      return User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject("The provided email address is already in use by another account")
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage("You may not dive into the underflow without a password!")
    .isLength({ max: 50 })
    .withMessage("We said a password... not a novel.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')  //why is this 'g' here?
    .withMessage("Password must contain at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character. No '_', '-', or '.'!"),
  check('confirm-password')
    .exists({ checkFalsy: true })
    .withMessage("Type it again, I dare you...")
    .isLength({ max: 50 })
    .withMessage("Act right, you know you will not remember that")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("You couldn't type it twice??? They don't match...")
      }
      return true;
    })
]

router.post('/signup', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  const {
    username,
    email,
    password,
  } = req.body;

  const user = User.build({
    username,
    email
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword
    await user.save();
    loginUser(req, res, user)
    res.redirect('/');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('signup-form', {
      title: "Sign up",
      username,
      errors,
      csrfToken: req.csrfToken(),
    });
  }
}))

//LOG IN ROUTES
router.get('/login', csrfProtection, asyncHandler(async (req, res) => {
  res.render('login-form', {
    title: 'Login',
    csrfToken: req.csrfToken()
  })
}))

const loginValidators = [
  check('email')  // if there is some input in the email box.
    .exists({ checkFalsy: true })
    .withMessage('You did not enter a valid email')
    .isEmail()
    .withMessage("Email address is not valid email")
    .custom((value) => {
      return User.findOne({ where: { email: value } })
        .then((user) => {
          if (!user) {
            return Promise.reject("This email does not exist in the Underflow! Sigh!")
          }
        })
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('The necros do not approve of this password')
];

router.post('/login', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {
    const {
      email,
      password
    } = req.body;

    // we need validation errors to check validation results(req)
    let errors = [];
    const validatorErrors = validationResult(req);          // array that we'll handle each of them on  line 53

    //console.log(validatorErrors);

    if (validatorErrors.isEmpty()) {
      const user = await User.findOne({ where: { email } });

      if (user !== null) {    // if the user exists in our db
        const isValid = await bcrypt.compare(               // comparing what the person inputed w/the hashedP
          password,
          user.hashedPassword.toString()
        );

        if (isValid) {           // if the password and hashed match
          loginUser(req, res, user);
          return res.redirect('/');
        }

        errors.push("The underflow has no use for you. Email address and password failed.");
      }
    } else {   //if not empty
      errors = validatorErrors.array().map((error) => error.msg);    //only the validatorErrors
    }

    //console.log(errors)

    res.render('login-form', {
      title: 'Login',
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
  })
);

// DEMO USER LOGIN
router.post('/demo', csrfProtection, asyncHandler(async (req, res) => {
  const user = await User.findOne({ where: { email: 'test@test.com' } });

  // in the event that the dev maintainers of this code
  // don't want to drop their databases and the demo
  // user is nonexistent :)
  if (!user) {
    const buildDemoUser = await User.build({
      username: 'test',
      email: 'test@test.com',
      hashedPassword: bcrypt.hashSync('Test123!', 10)
    });

    await buildDemoUser.save();

    loginUser(req, res, buildDemoUser);
  } else {
    loginUser(req, res, user);
  }

  res.redirect('/');
}));

module.exports = router;
