var spt = [
    {
        "type": "visit",
        "url": "http://www.techrum.vn/login/"
    },
    {
        "type": "input",
        "selector": "#ctrl_pageLogin_password",
        "value": "1234567"
    },
    {
        "type": "input",
        "selector": "#ctrl_pageLogin_login",
        "value": "duypeo96@hotmail.com"
    },
    {
        "type": "submit",
        "selector": "#pageLogin > dl.submitUnit > dd > input.button.primary",
        "action": "click"
    }
];

module.exports.sp = spt;