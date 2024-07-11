console.log("Hello");

// Bind Method provide us with a reusable function - 

var obj = {name : "Chirag"};

function hello(age, address){
    return "Hello" + this.name +age + address;
}

const bindfunc = hello.bind(obj);

console.log(bindfunc(24, "Delhi"));

console.log(bindfunc(75, "agra"));