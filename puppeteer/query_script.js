var queryScript = async function (ele, page) {
    let res;
    if(ele.type === 'visit') {
        let url = ele.url;
        res = await page.goto(url);
        // console.log(res);
    } else if(ele.type === 'input') {
        await page.click(ele.selector);
        await page.keyboard.type(ele.value);
    } else if(ele.type === 'submit') {
        await page.click(ele.selector);
        await page.waitForNavigation();
    }
    return res;
};

module.exports.queryScript = queryScript;