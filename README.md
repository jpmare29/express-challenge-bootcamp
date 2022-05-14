# express-challenge-bootcamp

[Deployed Application](https://rocky-ocean-85742.herokuapp.com/)

The server routes are broken up into html and api router files stored in the /routes directory 
for purposes of scalability. They are imported into the main server which has the necessary 
middleware to run the page properly. The only other function in the main server.js file is 
express .listen() call, this call listens on either the heroku specified port or the 
localhost 3001 port and logs a message to the console to indicate the server is successfully listening.
The routes link the functions from the index.js file in the /public, frontend directory, to the server side.
The /lib directory contains one js file with some helper functions to handle post and delete requests,
which are imported into the api router file. The /db directory has a .json file used to substitute
for an actual database and store the noteArray used update the notes written by the user. Once the 
server begins listening the user can navigate to the specified link and use the note taker application
to write, read, and delete notes.