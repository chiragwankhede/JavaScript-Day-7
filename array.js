console.log("hello");


//  To push any element in array we use push() function-
const array1 = ["a","b"];

const array2 = [1,2,3,4,5];

array1.push(100);

console.log(array1)


//  To push an element from an array to another array use apply with push() function

const array3=["h","e","l","l","o"];

const array4= [100,200,300,400];

array3.push.apply(array3,array4);

console.log(array3);


// To find the min/max no using inbuit function - 

console.log(Math.max(5,7,88,999));
console.log(Math.min(5,7,88,999));

//  But the function Math.min/max() does not work with array, so we use apply along with built functions -

const number = [1,5,8,7,0];

console.log(Math.max.apply(null,number));

console.log(Math.min.apply(null,number));
