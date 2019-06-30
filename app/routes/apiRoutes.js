
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

      //parsing out the scores from the new user's answers so that they are inegers
      var userAnsInt = [];
      for(var i = 0; i < userAnswers.length; i++){
        userAnsInt.push(parseInt(userAnswers[i]));
      }

          friends.push(userData);
          res.json(true);
      // console.log(userAnswers);
      console.log(userAnsInt);

      for(var i = 0; i < friends.length; i++){
        var diff = 0;
        for(var j = 0; j < userAnsInt.length; j++){
            diff += Math.abs(friends[i].scores[j] - userAnsInt[j]);
        };
        console.log(diff);


      }
      // console.log(parseInt(friends[0].scores))

      // for(var i = 0; i < friends.length; i++){
      //   var totaldiff = 0
      //   var userScoreArray = [];
      //   for(var j = 0; j < 10; j++){
      //     userScoreArray.push(parseInt(friends[i].scores[j]))
      //     totaldiff += Math.abs(friends[i].userScoreArray[j] - userAnsInt[j]);
      //   }
       
      //   console.log(userScoreArray);
      //   console.log(totaldiff);
      // }
      

    });
  
  
    // app.post("/api/clear", (req, res) => {
    //   // Empty out the arrays of data
    //   friends.length = 0;
    //   res.json({ ok: true });

    // });
  };