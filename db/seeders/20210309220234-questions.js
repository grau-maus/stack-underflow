'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Questions', [
      {
        title: 'Most efficient way to compare lists Python',
        content: "How can I compare lists to one another. I am looking to compare the first - fourth digit of two lists. I'm aware of being able to do if list[1] == list[1]: but id assume there is a more efficient way to get it done. Thank you. I don't want to compare the lists overall, just x part of one list to x part of another",
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Why does this AJAX call not redirect to the `/login` URL?",
        content: "I am making a Node Express app with Handlebars. I get a success message printed in the console but the URL is not changed to /login, and hence the page never gets rendered, although, when I manually type the URL localhost:3000/login into the browser, I can see my login page rendered. Therefore, I wanted to know why the AJAX is not working.",
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Is it possible to sort an almost sorted array in parallel?",
        content: "An 'almost sorted array' is defined here as each element being at most k positions away from their position in a sorted array. The array size is n. The basic algorithm in serial is using a min heap (assuming you want to sort in ascending order), which gives O((n-k)log k + k) running time, or alternatively, you can use insertion sort and get O(nk) running time.For either of these algorithms, I don't see a good way to parallelize it. You can, of cause, split the array up into contiguous chunks, and send each segment to a single thread, but the issue is there's always going to some elements at the ends of the segments that could fall into a different segment in the sorted array. So if you were to use multithreading, you would run into data race issues, or alternatively, you can add in locks to avoid the data race issues at the cost of performance. Are there better ways to solve this problem in parallel?",
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Aws pinpoint : Send sms from aws sub account",
        content: "We are using pinpoint to send sms from our Spring boot server hosted in aws (Main account). We have 1 sub account where we have configured pinpoint. We have setup the main account to send sms from account id of sub account (pipoint application id). We are using application id of pinpoint and long code that we have . Just this two things to connect to app. we are getting this error in our spring boot application. Resource not found (Service: AmazonPinpoint; Status Code: 404; Error Code: NotFoundException) Thanks for the help.",
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Need to know the technology and programming language behind it",
        content: "Which programming language and technology these saas app are using can you elaborate? Wht programming languages we should learn to create these types of app? Can anyone suggest steps by step outline to create these types of app? Thanks",
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Tensor flow on mac gpu",
        content: "I am learning machine learning and thinking to buy a laptop. I am confused which one I buy as I read somewhere tensor flow gpu don't work on the Mac laptop. Which gpu tensor flow work perfectly? is this only on Nvidi cards?        ",
        userId: Math.floor(Math.random() * (10 - 1) + 1),
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, {
      truncate: true
    });
  }
};
