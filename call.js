console.log("Hello");

//  Call Method takes the object to call , and the list of the arguments -  

var obj = {name : "Chirag"};

function hello(age, address){
    return "Hello" + this.name + age + address;
}

console.log(hello.call(obj,24,"MH"));