var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
// require more modules/folders here!
var counter = 0;
exports.handleRequest = function (req, res) {

  console.log(++counter);
  var index;
  fs.readFile('web/public/index.html', 'utf8', (error, data) => {

    if (error) {
      console.log('error');
    
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      
      res.end(data);
      
    }

  });
  // console.log(Object.keys(req));
  //   // console.log('method: ', req.method);
  //   // console.log('hearders: ', req.headers);
  //   // console.log('url: ', req.url);
  // console.log(req); 
   // two cases
    // check if it is valid url. 
      // if valid

  if (req.method === 'POST') {
    var body = '';
    req.on('data', function(chunk) {
      body += chunk;
    })
    .on('end', function(data) {
      body = body.split('=');
      body = body[1];
      console.log(archive.isUrlInList(body));

    });
    

  }
  
  // requests will have url

    // upon getting url, this request handler checks if the url has been archived yet

};

