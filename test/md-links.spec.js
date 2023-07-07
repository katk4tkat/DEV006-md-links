const {mdLinks} = require('../index.js');
const { isAbsolute, relativeToAbsolute, isValidPath} = require('../functions.js');

const path = './prueba.md';
const options =  {validate: true};


describe('mdLinks', () => {
  it.only('should return promise that resolves as an array', async() => {
  const result = mdLinks(path, options);
  await expect (result).resolves.toEqual([
    {
      link: 'https://claseslaboratoria.slack.com/archives/C03T1E5TJCQ',
      status: 200,
      text: 'OK',
      origin: 'C:\\Users\\Kat\\Desktop\\LABORATORIA\\MD LINKS\\DEV006-md-links\\prueba.md'
    },
    {
      link: 'https://docs.npmjs.com/cli/install',
      status: 200,
      text: 'OK',
      origin: 'C:\\Users\\Kat\\Desktop\\LABORATORIA\\MD LINKS\\DEV006-md-links\\prueba.md'
    },
    {
      link: 'https://github.com/Laboratoria/course-parser',
      status: 200,
      text: 'OK',
      origin: 'C:\\Users\\Kat\\Desktop\\LABORATORIA\\MD LINKS\\DEV006-md-links\\prueba.md'
    }
  ]);
  });
});
