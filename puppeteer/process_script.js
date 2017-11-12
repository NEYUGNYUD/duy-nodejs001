var processScript = async function (page, scriptData) {
    let s = JSON.parse(scriptData);
    for(let i = 0; i < s.length; i++) {
        if(s[i].type === 'visit') {
            let scriptUrl = s[i].url;
            await page.goto(scriptUrl);
        } else if(s[i].type === 'input') {
            await page.click(s[i].selector);
            await page.keyboard.type(s[i].value);
        } else if(s[i].type === 'submit') {
            await page.click(s[i].selector);
            await page.waitForNavigation();
        }
    }
};

module.exports.processScript = processScript;