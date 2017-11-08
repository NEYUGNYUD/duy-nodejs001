/**
 * Created by duype on 11/5/2017.
 */
const url = require('url');
const puppeteer = require('puppeteer');

var getDataWeb = async function(req) {
        //store information of response
        let resInfor = {};
        let addr = await url.parse(req.url, true);
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
                // console.log(temp);
                console.log('response received');
                browser.close();
                return resInfor;
            } else {
                console.log('***Error: Response is not received succeccful***');
                resInfor.sucess = 'false';
                resInfor.message = 'Không thể khởi động selenium/phantomjs/puppeteer.';
                browser.close();
                return resInfor;
            }
        } catch (error) {
            resInfor.sucess = 'false';
            resInfor.message = 'Không thể khởi động selenium/phantomjs/puppeteer.';
            browser.close();
            return resInfor;
        }
    };
module.exports.getData = getDataWeb;
