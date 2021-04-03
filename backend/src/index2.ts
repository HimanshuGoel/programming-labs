import http from 'http';
import url from 'url';
import jsonBody from 'body/json';
import formidable = require('formidable');

const server = http.createServer();

server.on('request', (request: any, response: any) => {
  console.log('This is an incoming request.');
  console.log(http.STATUS_CODE[404]);
  console.log(request.method);
  console.log(request.url);

  const parsedUrl = url.parse(request.url, true);
  console.log(parsedUrl);
  console.log(parsedUrl.pathName);
  console.log(parsedUrl.query);
  console.log(parsedUrl.headers);

  const body: any = [];
  request
    .on('data', (chunk: any) => {
      body.push(chunk);
    })
    .on('end', () => {
      const parsedJSON = JSON.parse(Buffer.concat(body));
      const userName = parsedJSON[0].userName;
      console.log(userName);
    });

  // using jsonBody to get the body from request
  jsonBody(request, response, (err: any, body: any) => {
    if (err) {
      console.log(err);
    } else {
      console.log(body);
    }
  });

  // returning just the headers and status
  response.statusCode = 404;
  response.setHeader('X-Powered-By', 'Node');
  response.writeHead(404, { 'X-Powered-By2': 'Node' });
  response.end();

  // returning json data
  const data = {};
  response.setHeader('Content-Type', 'application/json');
  response.status = 200;
  const serializedJSON = JSON.stringify(data);
  response.write(serializedJSON);
  response.end();

  // error handling
  request.on('error', (err: any) => {
    console.log(err.code);
    console.log(err.message);
    console.log(err.stack);
    console.error('request error');

    response.statusCode = 500;
    response.write('An error has occurred');
    response.end();
  });

  response.on('error', (err: any) => {
    console.log(err.code);
    console.log(err.message);
    console.log(err.stack);
    console.error('response error');
    response.statusCode = 500;
    response.write('An error has occurred');
    response.end();
  });

  // file upload with formidable using callbacks
  const form = newformidable.IncomingForm({
    uploadDir: __dirname,
    keepExtensions: true,
    multiple: true,
    maxFileSize: 5 * 1024 * 1024,
    encoding: 'utf-8',
    maxFields: 20,
  });
  form.parse(request, (err: any, fields: any, files: any) => {
    if (err) {
      console.log(err);
      response.statusCode = 500;
      response.end('Error');
    }
    console.log(fields);
    console.log(files);

    response.statusCode = 200;
    response.end('success');
  });

  // file upload with formidable using events

  form
    .parse(request)
    .on('fileBegin', (name: any, file: any) => {
      console.log('our upload has started');
    })
    .on('file', (name: any, file: any) => {
      console.log('field + file pair has been received');
    })
    .on('field', (name: any, value: any) => {
      console.log('field received');
      console.log(name, value);
    })
    .on('progress', (bytesReceived: any, bytesExpected: any) => {
      console.log(bytesReceived, bytesExpected);
    })
    .on('error', (err: any) => {
      console.error(err);
      request.resume();
    })
    .on('aborted', () => {
      console.error('request aborted by the user!');
    })
    .on('end', (name: any, file: any) => {
      console.log('done - request fully received!');
      response.end('success!');
    });
});

server.listen(8000);

// making external api calls
const request = http.get('http://www.google.com', (response) => {
  console.log('status code ' + response.statusCode);
  console.log(response.headers);

  response.on('data', (chunk: any) => {
    console.log('this is a chunk');
    console.log(chunk.toString());
  });

  request.on('error', (err: any) => {
    console.log(err);
  });
});

// making a delete authorized call

const data = require('https');

const data = JSON.stringify({
  userName: 'fredv100',
});

const options = {
  hostname: 'localhost',
  port: 443,
  path: '/users',
  method: 'DELETE',
  header: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    Authorization: Buffer.from('myUsername' + ':' + 'myPassword').toString(
      'base64'
    ),
  },
};

const request = https.request(options, (response) => {
  console.log('statusCode' + response.statusCode);
  console.log(response.headers);

  response.on('data', (chunk: any) => {
    console.log('this is a chunk');
    console.log(chunk.toString());
  });
});

// using axios package

const axios = require('axios');

axios
  .get('http://www.google.com')
  .then((response: any) => {
    console.log(response.data);
  })
  .catch((error: any) => {
    console.log(error);
  });

// read a file asynchronously
const { convertCsv } = require('./csv.parse');
const { readFile } = require('fs');

readFile(
  './data/pultizer-circular-data.csv',
  'utf-8',
  (err: any, data: any) => {
    if (err) {
      console.log('there was a problem with the file' + err);
      return;
    }
    const values = convertCsv(data);
    console.table(values);
  }
);

// read a file synchronously
const { readFileSync } = require('fs');
try {
  const data1 = readFileSync('./data/pultizer-circular-data.csv', 'utf-8');
  console.table(data1);
} catch (error) {
  console.log('there was a problem with the file' + err);
}

// read a file asynchronously without callbacks
const fs = require('fs');
const { promisify } = require('util');

const readFilePromisify = promisify(fs.readFile);

const read1 = async () => {
  const data = await readFilePromisify('data.csv', 'utf8');
  console.table(convertCsv(data));
};

read1();

// reading parts of a file (like a large log file) asynchronously
const { open, read } = require('fs');

open('./data.csv', (err, fileDescriptor) => {
  const buffer = Buffer.alloc(200);
  read(fileDescriptor, buffer, 0, buffer.length, 0, (err, count, buff) => {
    console.table(convertCsv(buff.toString()));
  });
});

// reading parts of a file (like a large log file) synchronously
const fd = fs.openSync('./data/app.log');

let count = 0;

do {
  const buffer = Buffer.alloc(200);
  count = fd.readSync(fd, buffer, 0, buffer.length, null);

  console.log(buffer.toString());
} while (count > 0);
fd.closeSync(fd);

// writing an entire file
const { writeFile } = require('fs');

writeFile('./data/app.log', 'This is a dummy data', (err: any) => {
  err ? console.log(err) : console.log('data has been saved successfully');
});

// appending to a file (eighther provide flag as 'a' or use appendFile)

writeFile(
  './data/app.log',
  'This is a dummy data',
  { flag: 'a' },
  (err: any) => {
    err ? console.log(err) : console.log('data has been saved successfully');
  }
);

const { appendFile } = require('fs');
appendFile('./data/app.log', 'This is a dummy data', (err: any) => {
  err ? console.log(err) : console.log('data has been saved successfully');
});

// utilizing flags in writeFile (throw an error if file already exists)
// x - exclusive, + - multiple modes, s - synchronous
// r -read mode, r+ - read and write mode, rs+ - read and write mode synchronously
// w - write mode, wx - read in exclusive mode, w+ - read and write mode, wx+ -read and write with exclusive
// a - append mode, ax - append with exclusive, a+ - append and read mode, ax+ - append read mode with exclusive, as - appending synchronously, as+ - appending and reading synchronously
writeFile(
  './data/app.log',
  'This is a dummy data',
  { flag: 'wx' },
  (err: any) => {
    err ? console.log(err) : console.log('data has been saved successfully');
  }
);

// writing data into base64 format
writeFile(
  './data/app.log',
  'This is a dummy data',
  { encoding: 'base64' },
  (err: any) => {
    err ? console.log(err) : console.log('data has been saved successfully');
  }
);

// watching and writing parts of a file
const { closeSync, openSync, readdirSync, watch, writeSync } = require('fs');
const camelCase = require('camelCase');

watch('./read', () => {
  const indexFd = openSync('./index.js', 'w');
  const files = readdirSync('./read');

  files.map((f: any) => {
    const name = f.replace('js', '');
    console.log('adding a file: ' + f);
    writeSync(
      indexFd,
      `module.exports.${camelCase(name)} = require('./read/${name}').read;\n}`
    );
  });
});

// reading data from stream
const { createReadStream } = require('fs');

const stream = createReadStream('./data/app.log', {
  hightWaterMark: 9550,
  encoding: 'utf8',
});

stream.on('data', (data: any) => console.log(data));

// pausing data from a stream
stream.on('data', (data: any) => {
  stream.pause();
  console.log(data);

  setTimeout(() => {
    stream.resume();
  }, 2000);
});

// writing data to a stream

const { createWriteStream } = require('fs');

const stream = createReadStream('./data/app.log', {
  highWaterMark: 95,
  encoding: 'utf8',
});

const writer = createWriteStream('./data/output.log');

let iteration = 0;
stream.on('data', (data) => {
  stream.pause();
  console.log(++iteration);

  writer.write(data);
  setTimeout(() => {
    stream.resume();
  }, 1000);
});

// handling mismatched streams (when the output stream is slower than the input stream) by simply using below method, it will handle the back-pressure automatically
stream.pipe(writer);
