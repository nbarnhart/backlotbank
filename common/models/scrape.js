var nodemailer = require('nodemailer');
var phantom = require('phantom');
var fs = require('fs');

module.exports = function(Scrape) {

    Scrape.runScrape = function(data, cb) {
        scrape(data,cb);
    };
    Scrape.remoteMethod('runScrape',{
        isStatic: true,
        accepts: {arg: 'data', type: 'object'},
        returns: {arg: 'result', type: 'object'}
    });

    //data: {
    //  username
    //  password
    //  guild
    //  email
    //}
    //
    //    cb(null, {result: });

    function scrape(data,cb) {

        var ph;

        phantom.create({'load-images': 'no', 'ignore-ssl-errors': 'yes'}, createFunction);

        function onConsoleMessage(msg){
            if(~msg.indexOf('dgadata')){
                //cb(null,{ result: JSON.parse(msg).dgadata });
                cb(null,{result: 'success'});
                emailMessage(JSON.parse(msg).dgadata);
                ph.exit();
            }
        }

        function createFunction(phjs){
            ph = phjs;
            ph.createPage(createPageFunction);
        }

        function createPageFunction(page){
            var testindex = 0;
            var loadInProgress = false;

            page.set('onConsoleMessage',onConsoleMessage);

            page.set('onLoadStarted',function() {
                loadInProgress = true;
            });

            page.set('onLoadFinished',function() {
                loadInProgress = false;
            });

            var steps = [
                function() { // 0
                    //Load Login Page
                    page.open('https://www.dga.org/Login.aspx?ReturnUrl=%2F');
                },
                function() { // 1
                    //Enter Credentials
                    page.evaluate(function(username,password) {
                        var userElem = document.getElementById('left_0_left_0_LoginValidation_Login1_UserName');
                        var passElem = document.getElementById('left_0_left_0_LoginValidation_Login1_Password');
                        userElem.value = username;//'jlucido@sloan.mit.edu';
                        passElem.value = password;//'passw0rd';
                        return 'hello';
                    },function() {},data.username,data.password);
                },
                function() { // 2
                    //Login

                    page.evaluate(function() {
                        var loginElem = document.getElementById('left_0_left_0_LoginValidation_Login1_Login');

                        var event = document.createEvent('MouseEvents');
                        event.initMouseEvent( 'click', true, true, window, 1, 0, 0 );
                        loginElem.dispatchEvent(event);
                    });
                },
                function() { // 3
                    //Load Income Page
                    page.open('http://www.dga.org/Account/Income.aspx');
                },
                function() { // 4
                    page.evaluate(function () {
                        var hundredLink = document.getElementById('content_2_ResultsBtn100');

                        var event = document.createEvent('MouseEvents');
                        event.initMouseEvent( 'click', true, true, window, 1, 0, 0 );
                        hundredLink.dispatchEvent(event);
                    });
                },
                function() { // 5
                    page.evaluate(function () {

                        var obj = { dgadata: [] };

                        var table = document.querySelectorAll('.earningsGrid')[0];

                        var headers = [];
                        var headerElems = document.querySelectorAll('.earningsGrid thead th');
                        for(var i=0; i<headerElems.length; i++){
                            var header = headerElems[i].innerHTML.trim();
                            if(header) headers.push(header);
                       }
                        for (var j=1; j<table.rows.length; j+=2) {
                            var tableRow = table.rows[j];
                            var row = {};
                            obj.dgadata.push(row);
                            for(var k=2; k<tableRow.cells.length; k++){
                                if(headers[k-2] !== tableRow.cells[k-1].innerHTML.trim()){
                                    row[headers[k-2]] = tableRow.cells[k-1].innerHTML.trim();
                                }
                            }
                        }

                        var expandElems = document.getElementsByClassName('toggleRow');
                        var event;
                        var re = new RegExp('\'([A-Za-z]+)\',\'([0-9]+)\'');
                        for(i=0; i<expandElems.length; i++){
                            //function onclick(event) { GetSubgridDetails(this,'Residual','11263705')
                            var args = expandElems[i].onclick.toString().match(re);
                            getSubgridDetails(obj.dgadata[i],args[1],args[2]);
                        }

                        var waitFor = expandElems.length;
                        function getSubgridDetails(row,recordType, recordId) {

                            $j.ajax({
                                type: "POST",
                                url: "/Ajax/Accounts.asmx/GetERDetails",
                                contentType: "application/json; charset=utf-8",
                                data: "{ reType:'" + recordType + "', recordId:" + recordId + " }",
                                processData: false,
                                dataType: "json",
                                success: function (data, errorText, xhr) {
                                    waitFor--;
                                    if (!data.d) {
                                        //Error
                                    } else {
                                        row.recordId = recordId;
                                        row.detail = data.d;
                                        if(waitFor === 0){
                                            console.log(JSON.stringify(obj));
                                        }
                                    }
                                },
                                error: function (msg) {
                                }
                            });
                        }
                    });
                }
            ];

            var interval = setInterval(function() {
                if (!loadInProgress && typeof steps[testindex] == 'function') {
                    steps[testindex]();
                    testindex++;
                }
                if (typeof steps[testindex] != 'function') {
                    clearInterval(interval);
                }
            }, 100);

        }
    }

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'mmullens@hoonto.com',
            pass: 'emailpassword'
        }
    });

    function emailMessage(data){
        var mailOptions = {
            from: 'Matt Mullens <mmullens@hoonto.com>', // sender address
            to: 'mmullens@hoonto.com, nlumpp@gmail.com', // list of receivers
            subject: 'Hello from the DGA scraper', // Subject line
            text: JSON.stringify(data),//'', // plaintext body
        };
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
            }else{
                console.log('Message sent: ' + info.response);
            }
        });
    }

};


