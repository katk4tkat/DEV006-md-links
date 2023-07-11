const { mdLinks } = require('../index.js');
const { getLinks, isValidPath, isFile, getFilesInDirectory } = require('../functions.js');
const fs = require('fs');

const path = './prueba.md';
const options = {validate: true};
const content = path.content;

describe("IsValidPath", () => {
  it('is function', () => {
    expect(typeof isValidPath).toBe('function');
  })
});

describe('getLinks', () => {
  test('should return an empty array if there are no links', () => {
    const content = 'Text with no links.';
    expect(getLinks(content)).toEqual([]);
  });
});

test('should return an array with a single link', () => {
  const content = 'This is a [link](https://example.com) in the text.';
  expect(getLinks(content)).toEqual(['https://example.com']);
});

describe("IsFile", () => {
  it('Should return "es archivo:true"', () => {
    const resultIsFile = isFile(path);
    expect(resultIsFile).resolves.toEqual(true);
  })
});

test('should reject with an error for directory without .md files', () => {
  const directoryPath = 'emptyDirectory';

  fs.readdir = jest.fn((path, callback) => {
    callback(null, []);
  });

  return getFilesInDirectory(directoryPath).catch(error => {
    expect(error).toBe('El directorio no contiene archivos MD');
  });
});

describe('mdLinks', () => {
  it('should return promise that resolves as an array', (done) => {
    const result = mdLinks(path, { validate: true });
    expect(result).resolves.toEqual([
      {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file: 'C:\\Users\\Kat\\Desktop\\LABORATORIA\\MD LINKS\\DEV006-md-links\\prueba.md',
        status: 200,
        OK: 'OK'
      }
    ]).then(done);
  });
});