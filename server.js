const server = require('./puppeteer/create_server.js');
const route = require('./puppeteer/route');
const processScript = require('./puppeteer/process_script');
const processData = require('./puppeteer/process_data');

server.start(route.route, processData.returnedResult, processScript.processScript);
