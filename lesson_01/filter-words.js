// Try it at JsBin https://jsbin.com/bazojuj/32/edit?js,console


// 1. Using ES6

String.prototype.filterWords = function(words) {
  return words.reduce((str, word) => str.replace(word, '***'), this);
}

console.log("JavaScript has good parts!".filterWords(['good', 'nice']));


// 2. Promises

String.prototype.filterWords = function(words) {
  return new Promise((resolve, reject) => {
    if (this.length === 0) reject('Error: empty string!');
    resolve(words.reduce((str, word) => str.replace(word, '***'), this));
  });
}

"This house is nice!".filterWords(['house', 'nice']).then(console.log);
"".filterWords(['house', 'nice']).then(console.log).catch(console.log);


// 3. Async & Await
// noprotect

async function usingAsyncAwait() {
  try {
    const parsedString = await "JavaScript has good parts!".filterWords(['good']);
     console.log(parsedString);
  } catch(error){
     console.log(error);
  }
}
usingAsyncAwait();


// 4. Observables

const { from } = rxjs;
const { reduce } = rxjs.operators

String.prototype.filterWords = function(words) {
  return from(words).pipe(
    reduce((str, word) => str.replace(word, '***'), this)
  );
}
const obs$ = "This house is nice!".filterWords(['house', 'nice']);
from(obs$).subscribe(console.log);
