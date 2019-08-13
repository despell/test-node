// server.js (Express 4.0)
var express = require('express'),
  app = express();

// SERVER CONFIGURATION
app.use(express.static(__dirname + '/../')); // set the static files location /public/img will be /img for users
var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`);
});
