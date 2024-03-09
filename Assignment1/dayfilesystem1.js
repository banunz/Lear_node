const fs=require('node:fs');
const Buffer=require('node:buffer');

fs.writeFile

// import { fs } from 'node:fs';
// import { Buffer } from 'node:buffer';

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
const data="Hello world 123";
fs.writeFile('C:/Users/banun/Dev/Lear_node/Assignment1/message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
