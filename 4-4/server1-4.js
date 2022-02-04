const https = require('https');
// const http2 = require('https2')
const fs = require('fs');

// http2.createSecureServer( ... )
https.createServer({
    cert: fs.readFileSync('domain certificate rout'),
    key: fs.readFileSync('domain secret key route'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ]
}, (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node</h1>');
    res.end('<p>Hello Server!</p>');
})
    .listen(443, () => {
        console.log('Waiting in port 443')
    });

///

