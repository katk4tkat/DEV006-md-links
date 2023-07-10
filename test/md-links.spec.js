const {mdLinks} = require('../index.js');
const {getLinks, isValidPath, isFile} = require('../functions.js');

const path = './prueba.md';
const options =  {validate: true};
const content = 

describe("IsValidPath", () => {
  it('is function', () => {
    expect(typeof isValidPath).toBe('function');
  })
});

describe("IsFile", () => {
  it('Should return "es archivo:true"', () => {
    const resultIsFile = isFile(path);
    expect(resultIsFile).resolves.toEqual(true);
  })
});

describe('getLinks', () => {
  it('should return promise that resolves as an array', () => {
  const resultGetLinks = getLinks(path);
   expect (resultGetLinks).toEqual(
    ["https://nodejs.org/"]
    );
  });
});

describe('mdLinks', () => {
  it('should return promise that resolves as an array', (done) => {
  const result = mdLinks(path);
   expect (result).resolves.toEqual([
    {
      link: 'https://nodejs.org/',
      status: 200,
      text: 'OK',
      origin: 'C:\\Users\\Kat\\Desktop\\LABORATORIA\\MD LINKS\\DEV006-md-links\\prueba.md'
    }
  ]).then(done);
  });
});
