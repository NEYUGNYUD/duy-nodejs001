var http = require('http');
var url = require('url');
const puppeteer = require('puppeteer');

http.createServer(async function (req, res) {
    //store information of response
    let resInfor = {};
    let addr = url.parse(req.url, true);
    // await puppeteer.launch({headless: false}).then(async browser => {
    let browser = await puppeteer.launch({headless: false});
    let page = await browser.newPage();
    try {
        let resTem = await page.goto("http://www." + addr.query.p);//return response
        if (resTem.status == 200) {
            resInfor.sucess = 'true';
            resInfor.message = 'ok';
            resInfor.data = {};
            //get cookies
            let temp = await page.cookies(page.url());
            resInfor.data.cookie = temp;
            //get header
            temp = await resTem.headers;
            resInfor.data.header = temp;
            //get html
            temp = await page.content();
            resInfor.data.html = temp;
            console.log(temp);
            console.log('response received');
        } else {
            console.log('***Error: Response is not received succeccful***');
            resInfor.sucess = 'false';
            resInfor.message = 'Không thể khởi động selenium/phantomjs/puppeteer.';
        }
    } catch (error) {
        console.log('***Have an exception***');
        resInfor.sucess = 'false';
        resInfor.message = 'Không thể khởi động selenium/phantomjs/puppeteer.';
    }
    await browser.close();
    // });
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(resInfor));
    res.end();
}).listen(80);
console.log('port 80');

