import express from 'express';
const fs = require('fs');
const app = express();
const AdmZip = require('adm-zip');

app.get('/', (req, res) => {
  res.send('Well done again !!!');
});

app.get('/zipFile', (req, res) => {
  const zip = new AdmZip();

  //   for (var i = 0; i < uploadDir.length; i++) {
  //       console.log("hello I am in here!!!")
  //     zip.addLocalFile(__dirname + '/upload/' + uploadDir[i]);
  //   }

  zip.addLocalFolder(__dirname + '/upload/');

  // zip.writeZip(pathToZip);

  // Define zip file name
  const downloadName = `${Date.now()}.zip`;

  const data = zip.toBuffer();

  // save file zip in root directory
  // zip.writeZip(__dirname + '/' + downloadName);

  // code to download zip file

  res.set('Content-Type', 'application/octet-stream');
  res.set('Content-Disposition', `attachment; filename=${downloadName}`);
  res.set('Content-Length', data.length);
  res.send(data);
});

app.listen(3001, () => {
  console.log('The application is listening on port 3001!');
});
