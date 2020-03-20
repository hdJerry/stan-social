const express = require('express');
const path = require('path');
app = express();
app.use(express.static(path.join(__dirname, 'dist')));
const port = process.env.PORT || 8080;
app.listen(port);

console.log("running here :" + port);


app
  .get('*', (request, response, next) => {
      response.sendFile( path.join(__dirname, 'dist/index.html' ))
  })