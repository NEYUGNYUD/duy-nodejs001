var returnedResult = async function (p, requireString, sendData) {
    //store an array of type of data required: header , cookie, html
    let requiredTypeData = requireString.split(',');
    await p.on('response', async (resTem) => {
        let resultReturned = {};
        if (resTem.status == 200) {
            resultReturned.data = {};
            resultReturned.sucess = 'true';
            resultReturned.message = 'ok';
            //check exist
            if(requiredTypeData.indexOf('html') > -1) {
                resultReturned.data.html = await p.content();
            } else {
                resultReturned.data.html = '';
            }

            if(requiredTypeData.indexOf('header') > -1) {
                resultReturned.data.header = await resTem.headers;
            } else {
                resultReturned.data.header = '';
            }

            if(requiredTypeData.indexOf('cookie') > -1) {
                resultReturned.data.cookie = await p.cookies(p.url());
            } else {
                resultReturned.data.cookie = '';
            }
        } else {
            resultReturned.sucess = 'false';
            resultReturned.message = 'Không thể khởi động selenium/phantomjs/puppeteer.';
        }
        await sendData(resultReturned);
    });
};


// var ReturnedResult = function(p, requiredString) {
//     this.p = p;
//     this.requiredString = requiredString;
//     this.rs;
//     this.processData = async function () {
//         var rs = new Object();
//         var p = this.p;
//         var requiredString = this.requiredString;
//         var requiredDataType = requiredString.split(',');
//         this.rs = await p.on('response', async function (resTem) {
//
//             if (resTem.status == 200) {
//                 rs.data = new Object();
//                 rs.sucess = 'true';
//                 rs.message = 'ok';
//                 if(requiredDataType.indexOf('html') > -1) {
//                     rs.data.html = await p.content();
//                 } else {
//                     rs.data.html = "";
//                 }
//
//                 if(requiredDataType.indexOf('header') > -1) {
//                     rs.data.header = await resTem.headers;
//                 } else {
//                     rs.data.header = "";
//                 }
//
//                 if(requiredDataType.indexOf('cookie') > -1) {
//                     rs.data.cookie = await p.cookies(p.url());
//
//                 } else {
//                     rs.data.cookie = "";
//                 }
//                 // console.log(rs.data.cookie);
//                 return rs;
//                 // this.rs = rs;
//                 // console.log('html: ');
//                 // console.log(this.rs.data.html);
//                 // console.log('gia tri cookies: ');
//                 // console.log(rs.data.cookie);
//             } else {
//                 rs.sucess = 'false';
//                 rs.message = 'Không thể khởi động selenium/phantomjs/puppeteer.';
//                 return rs;
//             }
//             // console.log(rs.data.html);
//         });
//     }
// };
module.exports.returnedResult = returnedResult;
