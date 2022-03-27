import validator from 'validator';
import chalk from 'chalk';
// const chalk = require('chalk');

// validator
// const v = validator.isEmail('adityaajinug@gmail.com');
// console.info(v);
// const m = validator.isMobilePhone('0833232232', 'id-ID');
// console.info(m);
// const m = validator.isNumeric('0833232232');
// console.info(m);

// chalk
const name = 'Adit';
const color = chalk.blue.bgBlack.bold('Hello') + ' ' + chalk.black.italic.bgRed(chalk.black('World') + chalk.green('!')) + ` ` + chalk.greenBright(`${name}`);
console.log(color);

