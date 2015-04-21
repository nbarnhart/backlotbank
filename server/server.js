var loopback = require('loopback');
var boot = require('loopback-boot');
var http = require('http');
var https = require('https');

var sslConfig = {};
try {
    sslConfig = require('./ssl-config');
}catch(e){ console.log('Running without SSL!'); }


var app = module.exports = loopback();

app.start = function() {

    var sslServer = app.get('SSLServer') && sslConfig.privateKey && sslConfig.certificate;
    if(!sslServer) port = 8080;
    else port = app.get('port');

    var server,httpServer = null;
    if(sslServer) {
        var options = {
            key: sslConfig.privateKey,
            cert: sslConfig.certificate
        };
        server = https.createServer(options, app);
        httpServer = http.createServer(app);
    } else {
        server = http.createServer(app);
    }
    server.listen(port, function() {
        var baseUrl = (sslServer ? 'https://' : 'http://') + app.get('host') + ':' + port;
        app.emit('started', baseUrl);
        console.log('LoopBack server listening @ %s%s', baseUrl, '/');
        //var baseUrl = (sslServer ? 'https://' : 'http://') + app.get('host') + ':' + port;
        //app.emit('started', baseUrl);
        //console.log('Web server listening at: %s', app.get('url'));
    });
    if(httpServer){
        app.enable('trust proxy');
        httpServer.listen(80,function() {
            app.use('*',function(req,res,next){
                if(req.secure){
                    next();
                }else{
                    res.redirect('https://backlotbank.com');
                }
            });
        });
    }
    return server;
};
/*
app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};
*/

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
