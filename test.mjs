function sayHello(name) {
  return `Hello my name is ${name}`;
}

const angka = 12

class Person {

}
// const sum = ((first, second) => {
//   return first + second;

// });
const sum = ((first, second) => first + second);

module.exports.sayHello = sayHello;
// module.exports.angka = angka;

module.exports = { sayHello, angka, Person, sum };

