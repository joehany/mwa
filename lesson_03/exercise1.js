const { resolve4 } = require('dns');
const { promisify } = require('util');

const resolve4Async = promisify(resolve4);
(async function() {
  try {
    const ip = await resolve4Async('www.mum.edu');
    console.log(ip);
  } catch(err) {
    console.log('ERROR:', err);
  }
})();
