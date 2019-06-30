
module.exports = (app) => {
  const friends = require("../data/friends");

  const path = require("path");


  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/friends", (req, res) => {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware

    var userData = req.body;
    var userAnswers = userData.scores;

    //setting initial conditions so that we can get smallest difference and make 
    //that the match later on
    var mainDiff = 1000000;
    var matchName = "";
    var matchPhoto = "";
    //parsing out the scores from the new user's answers so that they are inegers
    // var userAnsInt = [];
    // for (var i = 0; i < userAnswers.length; i++) {
    //   userAnsInt.push(parseInt(userAnswers[i]));
    // }

    friends.push(userData);
    res.json(true);
    // console.log(userAnswers);
    // console.log(userAnsInt);

    for (var i = 0; i < friends.length - 1; i++) {
      var diff = 0;
      for (var j = 0; j < userAnswers.length; j++) {
        diff += Math.abs(friends[i].scores[j] - userAnswers[j]);
      };
      console.log(diff);

      if (diff < mainDiff) {
        mainDiff = diff;
        matchName = friends[i].name;
        matchPhoto = friends[i].photo;
      }

    }
    console.log(matchName);
    console.log(matchPhoto);

  });


  // app.post("/api/clear", (req, res) => {
  //   // Empty out the arrays of data
  //   friends.length = 0;
  //   res.json({ ok: true });

  // });
};