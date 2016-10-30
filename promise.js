var fs = require('fs');

function readTotalLines(filePath){
    return new Promise( function(resolve, reject) {
        fs.readFile(filePath, (err, data) => {
            if (err) {reject("Not found " + filePath );return;}
            var to_string = data.toString();
            var split_lines = to_string.split("\r");
            resolve(split_lines.length);
        });
    });
}

var file1 = "./resources/FL_insurance_sample.csv";
var file2 = "./resources/us-500.csv";

Promise.all([readTotalLines(file1)
    ,readTotalLines(file2) 
    ,readTotalLines('./resources/contacts3.txt') 
    ,readTotalLines('./resources/contacts4.txt')
    ]).then(function(values){
        console.log(values);
    }).catch(function(errors){
        console.log(errors);
    })