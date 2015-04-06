module.exports = function(Scrape) {

    Scrape.getScrape = function(msg, cb) {
      cb(null, 'Greetings... ' + msg);
    };

    Scrape.remoteMethod('getScrape',{
      accepts: {arg: 'msg', type: 'string'},
      returns: {arg: 'greeting', type: 'string'}
    });
};
