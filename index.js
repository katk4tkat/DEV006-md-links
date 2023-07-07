const c = require('ansi-colors');

const { isAbsolute, relativeToAbsolute, isValidPath, isFile, getFilesInDirectory, readMDFile, getLinks } = require('./functions');

const filePath = process.argv[2];

function changeSlash(path) {
  return path.replace(/\\/g, '/'); // expresión regular que modifica la ruta para que no contenga espacios.
}

console.log(c.bold.green("Hola! Bienvenidx"))
console.log(c.yellow("Por favor, ingresa una ruta después de 'node index.js' para comprobar el estado de los links. \n Recuerda que, para evitar errores, la ruta debe ir entre comillas."))

function mdLinks(path, options) {
  return new Promise((resolve, reject) => {
    let absolutePath;
    const validate = isAbsolute(path); // Valida si la ruta es absoluta

    if (validate) {
      const filePathSlash = changeSlash(filePath);
      console.log("la ruta corregida es:", filePathSlash)
      absolutePath = filePathSlash;
    } else {
      absolutePath = relativeToAbsolute(path); // Convierte ruta relativa en absoluta
    }

    isValidPath(absolutePath)
      .then((isValid) => {
        console.log('La ruta es válida:', isValid); // Valida si la ruta existe (es válida)
      })
      .catch((err) => {
        console.error('La ruta no es válida');
      });

    isFile(absolutePath)
      .then((isFile) => {
        if (isFile) {console.log("Es archivo")
        readMDFile(absolutePath)
        .then((content) => {
      const links = getLinks(content);
      const fetchPromise = links.map((link) => fetch(link));
  
      Promise.all(fetchPromise)
        .then((answers) => {
          console.log('Respuestas de los enlaces:');
          return answers.forEach((answer, index) => (
            console.log({
              link: links[index], status: answer.status, text: answer.statusText
            })
        ));
        })
        .catch((err) => {
          console.error('Error al hacer las solicitudes fetch:', err);
        });
    })
    .catch((err) => {
      console.error('Error al leer el archivo:', err);
    });}
        else {
          console.log("Es directorio")
          getFilesInDirectory(absolutePath)
          .then((filePaths) => {
            console.log("Estos son los archivos MD disponibles:");
            console.log(filePaths);
          })
          .catch((error) => {
            console.error("Error al obtener la lista de archivos:", error);
          });   
          };
      })
      .catch((error) => {
        console.error('Error: No es archivo');
      });
      
  });
}

mdLinks(filePath)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

module.exports = {
  mdLinks,
  changeSlash,
}