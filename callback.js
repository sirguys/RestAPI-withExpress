var fs = require('fs');

function readTotalLines(filePath, callback) {
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        var to_string = data.toString();
        var split_lines = to_string.split("\r");
        callback(split_lines.length);
    });
}

var file1 = "./resources/FL_insurance_sample.csv";
var file2 = "./resources/us-500.csv";

readTotalLines(file1, function (totalLines) {
    console.log('file1:', totalLines);
});

readTotalLines(file2, function (totalLines) {
    console.log('file2:', totalLines);
});

readTotalLines(file1, function (totalLines) {
    readTotalLines(file2, function (totalLines2) {
        console.log('total records:', totalLines + totalLines2);
    });
});