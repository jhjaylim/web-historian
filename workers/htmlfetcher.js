// // // Use the code in `archive-helpers.js` to actually download the urls
// // // that are waiting.
// var archive = require('../helpers/archive-helpers');
// var http = require('http');
// var fs = require('fs');
// var cron = require('node-cron');


// // write cron code and make it do work ever XX seconds

// cron.schedule('10 * * * *', () => {

//   archive.readListOfUrls( (urlList) => {
      
//   // check the urlList if archived and filter
//   var notArchived = urlList.filter( someCallback);
//   // we know filter takes function as a callback


  
//   archive.isUrlArchived(url, (isArchived) => {

    


//   });

    

// // archive.isUrlInList(body, (isIn) => {

// //         // call readListOfUrls
        
// //         if (isIn) {
// //           // check if archived
// //             //if so respond with assets
// //           // else
// //             // respond with loading.html
            
  
          
// //         } else { // means entry does not exist in sites.txt
  
// //           // call archive.download (inside, it send request to worker to download.)
// //           // then call addToUrlList;
// //           // respond with loading.html
// //         }
// //       });



//   //archive.downloadUrls(urlList);

    
//   //     archive.isUrlArchived(url, (isArchived) => {
//   //       if (!isArchived) {
          
//   //       }
//   //     });

//   // });



//   // console.log('running a task every minute');
// });
// // readList in site.txt

// // check if there is any site that is not archived

// // if there is a site that is not archived, run archive.downloadUrl(list);

