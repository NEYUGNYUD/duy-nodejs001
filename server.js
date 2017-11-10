const http = require('http');
const url = require('url');
var getDataWeb = require('./puppeteer/get_data_website');
// const puppeteer = require('puppeteer');

http.createServer(async function (req, res) {
    let responseInfor;
    let pars = await url.parse(req.url, true).query;//url consist of one parameter named 'type' represents type of returned data
    await getDataWeb.getData(pars, (resInfor) => {
        responseInfor = JSON.stringify(resInfor);
        res.writeHead(200, {'Content-Type':'application/json'});
        res.write(responseInfor);
        res.end();
    });
}).listen(80);
console.log('port 80');

