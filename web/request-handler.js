var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpHelper = require('./http-helpers');
var _ = require('../node_modules/underscore/underscore');
// require more modules/folders here!
var counter = 0;
exports.handleRequest = function (req, res) {

  console.log(++counter);
  var index;
  console.log(counter);
  
  if (req.method === 'GET') {
    fs.readFile('web/public/index.html', 'utf8', (error, data) => {
      if (error) {
        console.log('error');
      } else {
    
        let body = '';
        console.log(req.method);
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);



        console.log('END!!!!!!!!!!!!!!!!!!!');



      }
    });


  } else if (req.method === 'POST') {

  
    req.on('data', function(chunk) {
      body += chunk;
    })
    .on('end', function(data) {
      body = body.split('=');
      body = decodeURIComponent(body[1]);
      console.log('------------------------------------');
      if (body.length === 0) {
        console.log('NO BODY');
      }

      
      console.log('check', body);
      var isUrlInList;
      var isArchived;
      // isArchive? 
      archive.isUrlArchived(body, (isArchived) => {
        if (isArchived) { // if true, then present to the user res.end();
          fs.readFile('web/public/index.html', 'utf8', (error, data) => { // readFile
            if (error) { // in the callback
              console.log('error');
            } else { // call serveAssets 
              httpHelper.serveAssets(res, data);
            }
          });
        } else { // else check if urlInList
          console.log('NOT ARCHIVED!');
          archive.isUrlInList(body, (inList) => {
            if (inList) { // true? then present to the user loading.html
              console.log('IN THE LIST');
              fs.readFile('web/public/loading.html', 'utf8', (error, data) => {
                if (error) {
                  console.log('error');
                } else {
                  res.writeHead(200, {'Content-Type': 'text/html'});
                  console.log(data);
                  res.end(data);
                }
              });
            } else { // false, then addToUrlList
              archive.addUrlToList(body, (data)=>{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
              });  
            }
          });
        }
      });


    });

  } 

};

