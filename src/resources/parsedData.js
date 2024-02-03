import parseXML from '../dataparser.js';

parseXML()
  .then(activities => {
    // Use activities here...
  })
  .catch(err => {
    console.error(err);
  });