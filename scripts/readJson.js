import fs from 'fs';

const filename = process.argv[2]
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err)
    return
  }
  const jsonData = JSON.parse(data);

  fs.writeFile('./out/version.txt', jsonData.version, 'utf8', (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("File has been written successfully.");
  });

});
