// const elements = ['elem1', 'elem2', 'elem3'];

// console.log(elements.join());

// console.log(elements.join('**'));

// console.log(elements.join('-'));

// const ex2 = ["This", "is", "a", "string"];
// console.log(ex2.join(' '));

// function checkDivisible(n, divisor){
//     if (n%divisor){
//         return false;
//     }else{
//         return true;
//     }
// }

// console.log(checkDivisible(10,2));
// console.log(checkDivisible(10,3));

// function occurences(text, character){
//     let count = 0;
//     for (var i=0; i<text.length; i++){
//         if (text.charAt(i) === character){
//             count++;
//         }
//     }
//     return count;
// }

// function occurences(text, character){
//     return text.split(character).length - 1;
// }

// let occurences = (text, character) => text.split(character).length-1;

// console.log(occurences("sample text", "e"));

// console.log(true+true+true==3);
// console.log(3=="3");//face cast in spate cand compara
// console.log(3==="3");//nu face cast
// console.log(0.1+0.2);

// console.log(("sample texte").split("e"));

// function par(array){
//     let arr = new Array;
//     for (var i=0; i<array.length; i++){
//         if (array[i]%2==0){
//             arr.push(array[i]);
//         }
//     }
//     return arr;
// }

// console.log(par([2, 4, 6, 8]));

// function addToArray(){
//     let args = arguments;
//     let array = args[0];

//     for (var i=1; i<args.length;i++){
//         array.push(args[i]);
//     }
//     return array;
// }

// function addToArray(array, ...args){
//     for (var i=0; i<args.length; i++){
//         array.push(args[i]);
//     }
//     return array;
// }

// let array = ["a"];

// console.log(addToArray(array, "b", "c").join(", "));

// function parVariadic(){
//     let array = new Array;
//     for (var i=0; i<arguments.length; i++){
//         if(arguments[i]%2==0){
//             array.push(arguments[i]);
//         }
//     }
//     return array;
// }

// console.log(parVariadic(2).join(", "));

// const checkPrime = (n)=>{
//     for (let i=2; i<= Math.sqrt(n); i++){
//         if(!(n%i)){
//             return false
//         }
//     }
//     return true;
// }

// if (process.argv.length<3){
//     console.log("not enough params");
// } else{
//     console.log(checkPrime(parseInt(process.argv[2])));
// }

var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
 for (var day in days){
//     console.log(day);
       console.log(days[day]);  
}

for (var day of days){
    console.log(day);
}

// function nrAparitiiText(text){
//     array = text.split(' ');
//     for (var cuv of array){
//         for (var i=0; i<array.length; i++){
//             if (cuv==array[i])
//         }
//     }
// }