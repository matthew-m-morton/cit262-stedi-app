// hello.test.mjs

import assert from 'assert';
import { sayHello } from './helloworld.js';

function testSayHello() {
  const result = sayHello();
  assert.strictEqual(result, 'hello');
  console.log('Test passed!');
}

testSayHello();