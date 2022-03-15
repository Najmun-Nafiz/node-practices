const { dir } = require('console');
const fs = require('fs');
const path = require('path');

const lib = {};

lib.basedir = path.join(__dirname, './../.data/');

//To create a new file data...
lib.create = (dir, file, data, callback) => {
    fs.open(`${lib.basedir+dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
        if(!err && fileDescriptor){
            const stringData = JSON.stringify(data);

            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if(!err2){
                    fs.close(fileDescriptor, (err3) => {
                        if(!err3){
                            callback(false);
                        }else{
                            callback('Error in closing to file !');
                        }
                    })
                }else{
                    callback('Error in  writing to new file !')
                }
            });
        }else{
            callback('File cannot create or it may already exist !');
            // callback(err);
        }
    });
};

//To read a file data...
lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.basedir+dir}/${file}.json`, 'utf8', (err, data) => {
        callback(err, data);
    });
};

//To update a existing file...
lib.update = (dir, file, data, callback) => {
    fs.open(`${lib.basedir+dir}/${file}.json`, 'r+', (err, fileDescriptor) => {
        if(!err && fileDescriptor){
            const stringData = JSON.stringify(data);
            fs.ftruncate(fileDescriptor, (err1) => {
                if(!err1) {
                    fs.writeFile(fileDescriptor, stringData, (err2) => {
                        if(!err2){
                            fs.close(fileDescriptor, (err3) => {
                                if(!err3){
                                    callback(false);
                                }else{
                                    callback('Failed to update !');
                                }
                            });
                        }else{
                            callback('Error to file write for update !');
                        }
                    });
                }else{
                    callback('Error for file trancating !');
                }
            })
        }else{
            callback('File can not update in existingfile !');
        }
    })
};

module.exports = lib;