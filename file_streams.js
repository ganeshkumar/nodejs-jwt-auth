const fs = require('fs')

const readStream = fs.createReadStream('./file_example.mp3')
const writeStream = fs.createWriteStream('./file_example1.mp3')

readStream.on('data', (chunk) => {
  chunk.pipe(writeStream);
})

readStream.on('error', (error) => {
  console.log('error occured');
  fs.unlinkSync('./file_example1.mp3');
  console.log(error.message);
})

readStream.on('end', () => {
  writeStream.end();
})

writeStream.on('close', () => {
  console.log('File copied');
})
