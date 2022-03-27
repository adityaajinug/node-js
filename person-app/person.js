
// const { tanya, add } = require('./app');


// const allQuestion = async () => {
//   const name = await tanya('Your Name? ');
//   const age = await tanya('Your Age? ');

//   add(name, age);

// }

// allQuestion();


const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')

yargs(hideBin(process.argv))
  .command('add', 'tambah orang', () => { }, (argv) => {
    console.log(argv.name);
  }).parse()

// console.log(yargs.argv);