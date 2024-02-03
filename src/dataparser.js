import fs from 'fs';
import xml2js from 'xml2js';

// Function to parse XML
function parseXML() {
  return new Promise((resolve, reject) => {
    // Read XML from a file
    const xml = fs.readFileSync('src/resources/sustainability_global_information_statistic.xml', 'utf8');

    // Parse XML
    xml2js.parseString(xml, (err, result) => {
      if (err) {
        reject(err);
        return;
      }

      // Extract data from XML
      const activities = result['Activity Average Cost'].Activity.map(activity => ({
        [`Shipment and delivery over distance B`]: activity['Shipment and delivery over distance B'][0],
        [`Shipment and delivery over distance A`]: activity['Shipment and delivery over distance A'][0],
        [`Shipment_and_delivery_over_distance_A_Electric`]: activity['Shipment_and_delivery_over_distance_A_Electric'][0],
        Activity: activity['$'].name,
      }));

      resolve(activities);
    });
  });
}

export default parseXML;