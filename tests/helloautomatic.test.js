// hello.test.mjs

import assert from 'assert';
import { sayHello } from '../utils/helloworld.js';

it ('should say hello', ()=> {
  sayHello();
})

function testSayHello() {
  const result = sayHello();
  assert.strictEqual(result, 'hello');
  console.log('Test passed!');
}

testSayHello();