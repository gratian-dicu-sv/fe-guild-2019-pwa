// var fs = require('fs');
var http = require('http'),
  httpProxy = require('httpp-proxy');
//
// Create your proxy server
//
httpProxy.createServer(9000, 'localhost').listen(7777);

// var options = {
//   pathnameOnly: true,
//   router: {
//     '/device': 'http://localhost:3000',
//     '/web': 'http://localhost:3001',
//     '/api': 'http://localhost:7777',
//     // },
//     // ssl: {
//     //   key: fs.readFileSync('./MyKey.key', 'utf8'),
//     //   cert: fs.readFileSync('./MyCertificate.crt', 'utf8'),
//     // },
//   },
// };

// httpProxy.createServer(options).listen(80);

// httpProxy
//   .createServer({
//     target: {
//       host: 'localhost/web',
//       port: 3001,
//     },
//     ssl: {
//       key: fs.readFileSync('./MyKey.key', 'utf8'),
//       cert: fs.readFileSync('./MyCertificate.crt', 'utf8'),
//     },
//   })
//   .listen(8443);

// httpProxy
//   .createServer({
//     target: {
//       host: 'localhost',
//       port: 4444,
//     },
//     ssl: {
//       key: fs.readFileSync('./MyKey.key', 'utf8'),
//       cert: fs.readFileSync('./MyCertificate.crt', 'utf8'),
//     },
//   })
//   .listen(8083);
