var fs = require('fs');
var http = require('http');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  
  fs.readFile(this.paths.list, 'utf8', (error, data) => {
    var urlList = data.split('\n');
    callback(urlList);
  });
  
  
};

exports.isUrlInList = function(url, callback) {

  var urlList;
  this.readListOfUrls((list)=> {
    urlList = list;
    console.log(urlList);

    var urlInList = urlList.includes(url);
    
    callback(urlInList);
    

  });

   
};

exports.addUrlToList = function(url, callback) {
  // console.log(typeof url);
  // fs.appendFileSync(this.paths.list, `${url}`, 'utf8', (err, data) => {
    
    
  //   console.log(data);
    
  // });
  // fs.readFileSync(this.paths.list, 'utf8', (err, data) => {
  //   console.log(data);
    
    
  // });
};

exports.isUrlArchived = function(url, callback) {
  var directoryExists;
  // navigate to sites directory
  // check the folder exists
  var filePathToCheck = this.paths.archivedSites + '/' + url;

  fs.access(filePathToCheck, fs.constants.F_OK, (err) => {
    err ? directoryExists = false : directoryExists = true;
    callback(directoryExists);
  });
  
    // if it exists, use callback
    // else, return loading.html
};

exports.downloadUrls = function(urls) {

  // POST request for worker function
  urls.forEach((url) => {
    var filePath = this.paths.archivedSites + '/' + url + '.html';
    
    var file = fs.createWriteStream(filePath); //dest is going be archive/sites/url
    var request = http.get("http://www.google.com/", (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();  // close() is async, call cb after close completes.
      });
    }).on('error', (err) => { // Handle errors
      fs.unlink(filePath); // Delete the file async. (But we don't check the result)
      // if () {
      //   cb(err.message);
      // }
    });

  });  
  
};

































