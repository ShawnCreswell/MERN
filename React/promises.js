//! Producer
const myPromise = new Promise ((resolve, reject) => { // Promise is a constructor 
  // resolve(value); //
  // reject(err);
  //Executor 
  // Producing Code that takes some time to complete
  // eventually produce some result 

  setTimeout(() => {
    resolve('done');
  }, 2000);


  // reject(new Error('Whoops'))
});

// State: Pending -> fulfilled or rejected 
// Result: undefined -> value or error

// ! Consumer
const example = () => {
  myPromise
    .then(res = console.log(res))
    .catch(err => console.log(err))
    .finally(() => {
      console.log('finally')
    })
}

example();