var http = require('http');
var getDataWeb = require('./puppeteer/get_data_website');
// const puppeteer = require('puppeteer');

http.createServer(async function (req, res) {
    var resInfor = await getDataWeb.getData(req);
    var jsonResInfor = JSON.stringify(resInfor);
    res.writeHead(200, {'Content-Type':'application/json'});
    // res.write(resInfor);
    res.write(jsonResInfor);
    res.end();
}).listen(80);
console.log('port 80');

