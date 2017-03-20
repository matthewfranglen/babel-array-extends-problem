import { ExampleCode } from '../src/code.js';

describe('array', () => {
  it('should return the traditional greeting, when patched', () => {
    const v = new Array(1, 2, 3);
    v.hello = () => "Hello, World!";

    expect(v.hello()).toEqual("Hello, World!");
  });
});

describe('example code', () => {
  it('should be constructable', () => {
    const v = new ExampleCode(1, 2, 3);

    expect('' + v).toEqual('1,2,3');
  });

  it('should have array methods', () => {
    const v = new ExampleCode(1, 2, 3);
    const w = v.map(a => a + 1);

    expect('' + w).toEqual('2,3,4');
  });

  it('should return the traditional greeting', () => {
    const v = new ExampleCode(1, 2, 3);

    expect(v.hello()).toEqual("Hello, World!");
  });
});
