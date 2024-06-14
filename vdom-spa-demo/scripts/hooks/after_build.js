/**
  Copyright (c) 2015, 2024, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/

'use strict';
const fs = require('fs');
const archiver = require('archiver');
module.exports = function (configObj) {
  return new Promise((resolve, reject) => {
   console.log("Running after_build hook.");

    //change the extension of the my-archive.xxx file from .war to .zip as needed
    const output = fs.createWriteStream('vdom-project-package.war');
    //leave unchanged, compression is the same for WAR or Zip file
    const archive = archiver('zip');

    output.on('close', () => {
      console.log('Files were successfully archived.');
      resolve();
    });

    archive.on('warning', (error) => {
      console.warn(error);
    });

    archive.on('error', (error) => {
      reject(error);
    });

    archive.pipe(output);
    archive.directory('web', false);
    archive.finalize();
  });
};
