# YouTube Music Rest API Microservice
Wrapper around the [YouTube Music API](https://github.com/emresenyuva/youtube-music-api) package to create a REST API microservice using Express.


## Using

Clone the repo locally do the following steps:

Copy the env.example into another file called .env along with the contents.

At the root of the project in a command line window run these two commands

* npm install
* npm run serve

That should start the server to the port chose in the .env file.

Assuming your port is 3000, if you go to `localhost:3000` you should see it say "Hello World".

That's it! You can then use the other endpoints found in index.js to get YouTube Music API data from the unofficial API.

You can run this locally or deploy to your favorite hosting provider.

Highly suggest using `pm2` to run this service on a server.