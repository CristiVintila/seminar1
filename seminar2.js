// var number = 1;
// let bool = true;
// const stirng = "Hello";

// let obj = {
//     key:"Object"
// }

// var d = function datatipe(){
//     return true;
// }

// console.log("Must be number: ", typeof number);
// console.log("Must be boolean: ", typeof bool);
// console.log("Must be string: ", typeof String);
// console.log("Must be object: ", typeof obj);
// console.log("Must be function: ", typeof d);

// console.log(x);
// let x = "text";
// console.log(x);
//daca era var in loc de x nu mai aparea eroare
//putem folosi o variabila si sa o declaram mai tarziu

// console.log(process.argv[0]);
// console.log(process.argv[1]);
// console.log(process.argv[2]);

let sayHello = function(name){
    return "Hello"+name;
}

console.log(sayHello("Cristi"));

let sayHelloShort = (name)=>{
    return "Hello"+name;
}

let sayHelloShorter = (name)=> "Hello"+name;

console.log(sayHello("Cristi"));
console.log(sayHelloShort("Ioana"));
console.log(sayHelloShorter(process.argv[2]));