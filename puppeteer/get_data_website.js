/**
 * Created by duype on 11/5/2017.
 */
const puppeteer = require('puppeteer');
const spt = require('./query_script');
const jsonScript = require('./script');

//parameter 'pars' is an array of variable in url
let getDataWeb = async function(pars, callback) {
        let resInfor = {};//store information about response
        let js = jsonScript.sp;
        let browser = await puppeteer.launch({headless: false, timeout: 0});
        let page = await browser.newPage();
        try {
            //scan all element in script
            for(let i = 0; i < js.length; i++) {
                await spt.queryScript(js[i], page);
            }
            await page.on('response', async (resTem) => {
                // console.log(resTem);
                if (resTem.status == 200) {
                    resInfor.sucess = 'true';
                    resInfor.message = 'ok';
                    if(pars.type != '') {
                        if(pars.type == 'cookie') {
                            let temp = await page.cookies(page.url());
                            resInfor.cookie = temp;
                            console.log('process cookie.....');
                            await callback(resInfor);
                            return;
                        } else if(pars.type == 'header') {
                            let temp = await resTem.headers;
                            resInfor.header = temp;
                            await callback(resInfor);

                        } else if(pars.type == 'html') {
                            let temp = await page.content();
                            resInfor.html = temp;
                            await callback(resInfor);
                        }
                    }
                } else {
                    resInfor.sucess = 'false';
                    resInfor.message = 'Không thể khởi động selenium/phantomjs/puppeteer.';
                    await callback(resInfor);
                }
            })
        } catch (error) {
            console.log(error);
        } finally {
            // browser.close();
        }
    };
module.exports.getData = getDataWeb;
