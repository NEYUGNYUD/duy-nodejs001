const http = require('http');
const url = require('url');
const puppeteer = require('puppeteer');

var start = async function (route, returnedResult, getScript) {

    async function onRequest(req, res) {
        let pars = url.parse(req.url, true).query;
        let requestUrl = pars.url;
        let requestScript = pars.script;
        let requestData = pars.dataType;
        let bws = await puppeteer.launch({headless:false, timeout : 0});
        let p = await bws.newPage();

        var sendData = function(returnedData) {
            let jsonData = JSON.stringify(returnedData);
            res.writeHead(200, {'Content-Type':'application/json'});
            res.write(jsonData);
            res.end();
        };
        await route(p, requestUrl);

        if(requestScript != undefined) {
            await getScript(p, requestScript);
        }
        //process data after active script
        await returnedResult(p, requestData, sendData);
    }
    http.createServer(onRequest).listen(80);
    console.log('listenning...');
};

module.exports.start = start;