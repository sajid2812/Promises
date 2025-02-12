const fs = require("fs");

const readFile = new Promise((resolve, reject) => {
  fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
      return reject("Something went wrong while reading file.");
    }
    return resolve(data);
  });
});

const writeFile = new Promise((resolve, reject) => {
  const data = "      Hello World!     ";
  fs.writeFile("a.txt", data, (err) => {
    if (err) {
      return reject("Something went wrong while writing file.");
    }
    return resolve("File write completed successfully.");
  });
});

const cleanFile = new Promise((resolve, reject) => {
  fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
      return reject("Something went wrong while reading file.");
    }
    const trimmedData = data.trim();
    fs.writeFile("a.txt", trimmedData, (err) => {
      if (err) {
        return reject("Something went wrong while writing file.");
      }
      return resolve("File cleaned successfully.");
    });
  });
});
