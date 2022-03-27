// core modules

const fs = require('fs');
const readline = require('readline');


// file system
// string file sync
//fs.writeFileSync('README.md', 'Hello World Async');

// membaca isi dengan sync
// const isi = fs.readFileSync('README.md');
// console.info(isi.toString());

// membaca isi dengan async
// fs.readFile('README.md', 'utf-8', (e, file) => {
//   if (e) throw err;
//   console.info(file)

// })

// readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,

});

const dirPath = './file';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const jsonPath = './file/person.json';
if (!fs.existsSync(jsonPath)) {
  fs.writeFileSync(jsonPath, '[]', 'utf-8');
}

const tanya = (pertanyaan) => {
  return new Promise(((resolve, rejects) => {
    rl.question(pertanyaan, (name) => {
      resolve(name);
    });
  }));
}
const add = (name, age) => {

  const person = { name, age };
  const file = fs.readFileSync('file/person.json', 'utf-8');
  const cek = JSON.parse(file);

  cek.push(person);
  fs.writeFileSync('file/person.json', JSON.stringify(cek));
  console.log("Data berhasil masuk");

  rl.close();
};
module.exports = { tanya, add };





// sync
// rl.question('Your Name? ', (name) => {
//   rl.question('Your Age? ', (age) => {
//     const person = { name, age };
//     const file = fs.readFileSync('file/person.json', 'utf-8');
//     const cek = JSON.parse(file);

//     cek.push(person);
//     fs.writeFileSync('file/person.json', JSON.stringify(cek));
//     console.log("Data berhasil masuk");

//     rl.close();
//   });
// });

