const fs = require('fs')

const readStream = fs.createReadStream('./file_example.mp3')
const writeStream = fs.createWriteStream('./file_example1.mp3')

// here pipe method will handle back pressure for us! 
readStream.
  pipe(writeStream).
  on('error', (error) => {
    console.log('error occured while writing');
    console.log(error);
    fs.unlinkSync('./file_example1.mp3');
  }).
  on('finish', () => {
    console.log('end and done!');
  })
