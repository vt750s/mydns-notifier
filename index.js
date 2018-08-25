'use strict';

const MYDNS_FQDN = 'www.mydns.jp';
const MYDNS_PATH = '/login.html';

var https = require('https'),
    fs = require('fs');
const conf = JSON.parse(fs.readFileSync('config.json', 'utf8'));

var req  = https.get(
    {
        "host"  : MYDNS_FQDN,
        "port"  : 443,
        "path"  : MYDNS_PATH,
        "auth"  : conf.username + ':' + conf.password
    },
    function(res) {
        if (res.statusCode !== 200) {
            process.exit(1);
        }
    }
);

req.on('error', function(e){
    console.log(e);
    process.exit(-1);
})