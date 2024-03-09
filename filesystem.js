const fse=require('node:fs')

fse.readFile('C:/Users/banun/Dev/Lear_node/employee.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  }); 