// 1.
//     1. var and const in javascript are used to declare variables
//     2. Scope and Hoisting
//     3. const cannot be updated or re-declared but let can
//     4.
//------------------------------------------------------------------------------------------------
// 2.
//     1. Boolean is data types in Javascript
//     2. The result of a Boolean expression is either true or false.
//------------------------------------------------------------------------------------------------
// 3. 
// a,
// for(let i = 0; i < 7; i++){
//     console.log(i);
// }

// b,
// let n = Number(prompt("Enter a number"));
// for(let i = 0; i < n; i++){
//     console.log(i);
// }

// c,
// let n = Number(prompt("Enter n"));
// for(let i = 3; i < n; i++){
//     console.log(i);
// }

// d,
// let n = Number(prompt("Enter n"));
// let c = Number(prompt("Enter c"));
// for(let i = c; i < n; i++){
//     console.log(i);
// }

// e,
// let n = Number(prompt("Enter n"));
// let c = Number(prompt("Enter c"));
// for(let i = c; i < n; i += 3){
//     console.log(i);
// }

// f,
// let n = Number(prompt("Enter n"));
// let c = Number(prompt("Enter c"));
// let s = Number(prompt("Enter s"));
// for(let i = c; i < n; i+= s){
//     console.log(i);
// }

//------------------------------------------------------------------------------------------------
// 4.
// let t = 1;
// let num = Number(prompt("Enter a number"));
// for(let i = 1; i <= num; i++){
//     t *= i;
// }
// alert(`The factorial of 5 is ${t}`);
//------------------------------------------------------------------------------------------------
// 5.
// let age = Number(prompt("How old are you?"));
// if(age < 14){
//     alert("You are not old enough to view this content");
// }
// else{
//     alert("Enjoy!");
// }

//------------------------------------------------------------------------------------------------
// 6.
// let num = Number(prompt("Enter a number"));
// if(num >= 0 && num <= 9 && num !== 5 && num !== 4){
//     if(num < 5){
//         alert("Lower half of 9");
//     }
//     else{
//         alert("Higher half of 9");
//     }
// }

//------------------------------------------------------------------------------------------------
// 7.
// let n = Number(prompt("n = "));
// let x = Number(prompt("x = "));
// if(x < n / 2){
//     alert(`${x} is in lower half of ${n}`);
// }
// else{
//     alert(`${x} is in higher half of ${n}`);
// }
//------------------------------------------------------------------------------------------------

// 8.
// let x = Number(prompt("x = "));
// if(x % 2 == 0){
//     alert(`${x} is an even number`);
// }
// else{
//     alert(`${x} is an odd number`);
// }

//------------------------------------------------------------------------------------------------
// 9.
// a,
// for(let i = 0; i < 6; i++){
//     if(i < 3){
//         console.log("L");
//     }
//     else{ 
//         console.log("H");
//     }
// }

// b,
// let n = Number(prompt("Enter the total number of L's and H's ?"));
// let half;
// if(n % 2 !=0){
//     half = Math.ceil(n / 2);
// }
// else{
//     half = n/2;
// }
// for(let i = 1; i <= n; i++){
//     if(i <= half){
//         console.log("L");
//     }
//     else{
//         console.log("H");
//     }
// }

// c,
// d,

//------------------------------------------------------------------------------------------------
// 10.
// let weight = Number(prompt("Your weight in kg?"));
// let hightcm = Number(prompt("Your height in cm?"));
// let hightm = hightcm / 100;
// let bmi = weight/ (hightm * hightm);
// alert(`Your BMI is ${bmi.toFixed(1)}`);
// if(bmi < 16){
//     alert("You are severely underweight")
// }
// else if(bmi < 18.5){
//     alert("You are underweight");
// }
// else if(bmi < 25){
//     alert("You are normal");
// }
// else if(bmi < 30){
//     alert("You are overweight");
// }
// else{
//     alert("You are obese");
// }

//------------------------------------------------------------------------------------------------
//11.
// a. 
// function demo() {
//     for(let i = 0; i< 4; i++){
//         fd(100)
//         right(90)
//     }
//   }

// b. 
// function demo() {
//     for(let i = 0; i< 3; i++){
//         fd(100)
//         right(120)
//     }
// }

//c. 
// function demo() {
//     for(let i = 0; i< 5; i++){
//         fd(100)
//         right(72)
//     }
//   }

//d.
// function demo() {
//     for(let i = 0; i < 6; i++){
//        fd(100)
//        right(60)
//     }
// }
//------------------------------------------------------------------------------------------------

// 12.
// let num = Number(prompt("Enter number of edges"));
// function demo() {
//     for(let i = 0; i < num; i++){
//         fd(100)
//         right(360 / num);
//     }
// }     

//------------------------------------------------------------------------------------------------
// 13.
// let n = Number(prompt("How many polygons?"));
// function demo() {
//     for(let i = 3; i < 3 + n; i++){
//         for(let j = 0; j < i; j++){
//             fd(100);
//             right(360/i);
//         }
//     }
// }
