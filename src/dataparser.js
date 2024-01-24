const fs = require('fs');
const path = require('path');
const { mainModule } = require('process');
const xml2js = require('xml2js');
const filePath = path.join(__dirname, 'resources', 'sustainability_global_information_statistic.xml');
const xmlData = fs.readFileSync(filePath, 'utf-8');

parser = new DOMParser();
xmlDoc = parser.parseFromString(xmlData,"text/xml");
// const susdata = xmlDoc.getElementsByTagName("Sustainability_Data")[0];

const cost = xmlDoc.getElementsByTagName("Activity_Average_Cost")[0].childNodes[0].nodeValue;

print(cost);
