import { ExampleCode } from '../src/code.js';

describe('hello function', () => {
  it('should return the traditional greeting', () => {
    const v = new ExampleCode().hello();

    expect(v).toEqual("Hello, World!");
  });
});
