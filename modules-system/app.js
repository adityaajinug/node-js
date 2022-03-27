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

rl.question('Your Name? ', (name) => {
  rl.question('Your Age? ', (age) => {
    const person = { name, age };
    const file = fs.readFileSync('data/person.json', 'utf-8');
    const cek = JSON.parse(file);

    cek.push(person);
    fs.writeFileSync('data/person.json', JSON.stringify(cek));
    console.log("Data berhasil masuk");

    rl.close();
  });
});

