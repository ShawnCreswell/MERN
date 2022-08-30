function greet(name, callback){
    callback(name);
}

// Callback Function
// A function passed into another function
function greetByName(name){
    console.log(`Hello, ${name}!`);
}

// greet('Shawn', greetByName)


//No callback version (normal function)
function easyGreeter(name){
    console.log(`Hello, ${name}!`);
}

setTimeout(() => {
    console.log('Hello');
}, 3000);

console.log('GoodBye');