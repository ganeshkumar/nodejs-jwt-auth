const fs = require('fs')

const readStream = fs.createReadStream('./file_example.mp3')
const writeStream = fs.createWriteStream('./file_example1.mp3', {
  highWaterMark: 111
})


readStream.on('data', (chunk) => {
  const dataFull = writeStream.write(chunk);
  if (!dataFull) {
    console.log('data is full in buffer, apply backpressure');
    readStream.pause();
  }
})

readStream.on('error', (error) => {
  console.log('error occured');
  fs.unlinkSync('./file_example1.mp3');
  console.log(error.message);
})

readStream.on('end', () => {
  writeStream.end();
})

writeStream.on('drain', () => {
  console.log('stream is drained!');
  readStream.resume();
})

writeStream.on('close', () => {
  console.log('File copied');
})
