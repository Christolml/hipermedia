var express = require('express');
var app = express();

// variable de entorno
let port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send({hi: 'there'});
//   res.send('<h1>Hello World!</h1>');

});

app.listen(port,() => {
  console.log('Example app listening on port 3000!');
});
