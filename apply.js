console.log("Hello");

//  Apply Method is same as call, the only diiference is that it takes the arguments list in the form of an array

var obj = {name : "Chirag"};

function hello(age, address){
    return "Hello" + this.name + age + address;
}

console.log(hello.apply(obj,[24,"MH"]));