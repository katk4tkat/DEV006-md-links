const {mdLinks} = require('../index.js');
const { isAbsolute, relativeToAbsolute, isValidPath} = require('../functions.js');


describe("isAbsolute", () => {
  it('is function', () => {
    expect(typeof isAbsolute).toBe('function');
  })
});

describe("relativeToAbsolute", () => {
  it('is function', () => {
    expect(typeof relativeToAbsolute).toBe('function');
  })
});

describe("isValidPath", () => {
  it('is function', () => {
    expect(typeof isValidPath).toBe('function');
  })
});

const path = '../README.md';
const options =  {validate: true};


describe('mdLinks', () => {
  it('should return promise that resolves as an array', async() => {
  const result = mdLinks(path, options);
  await expect (result).resolves.toEqual([]);
  });

});
