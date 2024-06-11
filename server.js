// PATH: server.js

import express from 'express';
import jsonServer from 'json-server';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Configura multer para la subida de archivos
const upload = multer({ dest: 'uploads/' });

// Sirve archivos estáticos desde 'uploads'
server.use('/uploads', express.static('uploads'));

server.use(middlewares);

server.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  console.log('Received file:', file);

  if (!file) {
    console.log('No file uploaded');
    return res.status(400).json({ error: 'No file uploaded' });
  }

  if (path.extname(file.originalname) !== '.xlsx') {
    console.log('Incorrect file type:', path.extname(file.originalname));
    return res.status(400).json({ error: 'Incorrect data: Only .xlsx files are allowed.' });
  }

  const timestamp = Date.now();
  const newFilename = `${timestamp}-${file.originalname}`;
  const newPath = path.join('uploads', newFilename);

  fs.rename(file.path, newPath, (err) => {
    if (err) {
      console.error('Error processing file:', err);
      return res.status(500).json({ error: 'Error processing file.' });
    }

    console.log('File processed successfully:', newFilename);
    res.status(200).json({ filename: newFilename });
  });
});

server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running');
});
