// this is code snippets, things we may start to use, but want to delete. It's //slush.


// router.post('/login', csrfProtection, loginValidators, asyncHandler(async(res, res) => {
//   const { email, password } = req.body
//   // we need validation errors to check validation results(req)
//   const validationErrors = validationResult(req);       //
//   console.log(validationErrors);
//   let errors = [];
//   if(validationErrors.isEmpty()){     // no errors w/user input for email & pw
//     const user = await db.User.findOne({where: {email} });    // we've found the user where the email matches the email
//     if(user){
//       const isValid = await bcrypt.compare(password, user.hashedPassword.toString())
//     };
//       if(isValid){
//         loginUser(user)     // pass in the one user from line 33, and has set the session auth w/ the approp credentials
//         return req.session.save((e) => {
//           console.log(e)           //what does the error yield
//           res.redirect('/')
//         });
//       } else {
//         errors.push("Username and password not valid")
//       }
//     } else {
//       errors.push("Password is not valid")
//     }
//   }
// ))