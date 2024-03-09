const fse=require('node:fs')

fse.readFile('C:/Users/banun/Dev/Lear_node/employee.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  }); 

  fse.readFile('C:/Users/banun/Dev/Lear_node/employee.json', (err,jsondata) => {
    if (err) throw err;
    console.log(jsondata.toString());
  })

  
  fse.readFile('C:/Users/banun/Dev/Lear_node/employee.json', (err,jsondata) => {
    if (err) throw err;
    const jemplo=JSON.parse(jsondata)
    console.log(jemplo);
  })