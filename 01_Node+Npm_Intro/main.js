console.log('Welcome to Nodejs!');

const name = process.argv[2] || 'guest';

console.log(name);
console.log(`Hello ${name}`);
