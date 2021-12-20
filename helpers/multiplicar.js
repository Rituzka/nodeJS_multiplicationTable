const fs = require ('fs');
const colors = require ('colors');

const createFile = async (base = 5, listar = false, hasta = 10) => {
  try {
    let output = '';
    let consola = '';
    let fileName = `Tabla-${base}.txt`;

    for (let num = 1; num <= hasta; num++) {
      output += `${base} x ${num} =  ${base * num}\n`;
      consola += `${base} ${'x'.blue} ${num} ${'='.blue} ${base * num}\n`;
    }

    if (listar === true) {
      console.log ('======================='.rainbow);
      console.log ('TABLA DEL '.green, colors.green (base));
      console.log ('======================='.rainbow);

      console.log (consola);
    }

    fs.writeFileSync (`./output/${fileName}`, output);

    return fileName;
  } catch (err) {
    throw colors.bold.red (err);
  }
};

module.exports = {
  createFile,
};
