const fs=require('node:fs')
const path = require('node:path'); 

fs.readFile('C:/Users/banun/Dev/Lear_node/employee.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  }); 

  fs.readFile('C:/Users/banun/Dev/Lear_node/employee.json', (err,jsondata) => {
    if (err) throw err;
    console.log(jsondata.toString());
  })

  
  fs.readFile('C:/Users/banun/Dev/Lear_node/employee.json', (err,jsondata) => {
    if (err) throw err;
    const jemplo=JSON.parse(jsondata)
    console.log(jemplo);
  })
  
  const pathName='C:/Users/banun/Dev/Lear_node/filesystem.js';

  console.log(path.basename(pathName));
  console.log(path.parse(pathName));
  const basedpath=path.parse(pathName);
  console.log(basedpath.base);