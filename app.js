const {createFile} = require ('./helpers/multiplicar');
const argv = require ('./config/yargs');
require ('colors');

console.clear ();

createFile (argv.b, argv.l, argv.h)
  .then (fileName => console.log (fileName.rainbow, 'creado'.underline.blue))
  .catch (err => console.log (err));
