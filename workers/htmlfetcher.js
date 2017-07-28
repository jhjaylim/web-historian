// // Use the code in `archive-helpers.js` to actually download the urls
// // that are waiting.
var archive = require('../helpers/archive-helpers');
var http = require('http');
var fs = require('fs');
var cron = require('node-cron');


// write cron code and make it do work ever XX seconds

cron.schedule('10 * * * *', () => {

  archive.readListOfUrls( (urlList) => {
    urlList.forEach( (url) => {
      archive.isUrlArchived(url, (isArchived) => {
        
      });

  });



  // console.log('running a task every minute');
});
// readList in site.txt

// check if there is any site that is not archived

// if there is a site that is not archived, run archive.downloadUrl(list);

