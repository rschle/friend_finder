# friend_finder

This app uses a server, as well as Node.js and Express on the backend, and it functions to find the "best friend match" for the user based on her answer to a series of questions. The user answers these questions about herself by either strongly agreeing (5), strongly disagreeing (1) or somewhere in between. The number values of these answers are compared to the scores of potential matches in a predefined array within the server. The friend with the lowest difference in scores (calculated by looping through the array of candidates) is deemed the user's "best match." The name and photo of the best match then appear to the user once she has submitted the quiz. 


This app was deployed using Heroku and can be found here: https://rebecca-friend-finder.herokuapp.com/
