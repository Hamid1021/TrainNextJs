// import { createServer } from 'https';
// import { parse } from 'url';
// import next from 'next';
// import fs from 'fs';
// import express from 'express';

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// const httpsOptions = {
//   key: fs.readFileSync('/path/to/your/ssl/key.pem'),
//   cert: fs.readFileSync('/path/to/your/ssl/cert.pem')
// };

// app.prepare().then(() => {
//   const server = express();

//   server.all('*', (req, res) => {
//     const parsedUrl = parse(req.url, true);
//     handle(req, res, parsedUrl);
//   });

//   createServer(httpsOptions, server).listen(443, (err: any) => {
//     if (err) throw err;
//     console.log('> Ready on https://localhost:443');
//   });
// });

