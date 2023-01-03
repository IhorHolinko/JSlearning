"use strict";

// alert(1)
// console.log(4/0)
// confirm("sdjfksdfkl")
// prompt("dsklfjc,;lscd", "")

// let answers = [],
//     questions = [
//         "What is your name?",
//         "What is your surname?",
//         "How old are you?"
//     ];


// do {
//     console.log(answers);
//     answers++;
// } while (answers<questions.length);

//for (let i = 0; i < questions.length; i++) {
//    answers[i] = prompt(questions[i], "");
//}

//let answers = [];

//answers[0] = prompt("What is your name", "");
//answers[1] = prompt("What is your surname", "");
//answers[2] = prompt("How old are you", "");

// document.write(answers);

//for (let i = 0; i < 10; i++) {
//    console.log(i);
//};

//let i = 0;
//do {
//    console.log(i);
//    i++;
//} while (i<10);

//let = 0;
//while (i<10) {
//    console.log(i);
//    i++;
//}

// switch (age) {
//     case "18":
//         alert("You can come in");
//         break;
//     case "100":
//         alert("You are too old");
//         break;
//     default:
//         alert("I don`t know this answer");
// }

// function humanSayHello() {
//     console.log("Hello World");
// }

// humanSayHello();


// function humanSayHello(user) {
//     console.log("Hello " + user + "!");
// }

// humanSayHello("Igor");

// function calc(a, b) {
//     console.log(a + b);
// }

// calc(4, 5);



// let calc = function(a, b) {
//     return a + b;
// };

// console.log(calc(5, 5));



// function myFirstApp(name, age) {
//     alert(`Hello, my name is ${name}, I'm ${age} and this is my first programm!`);

//     function showSkills() {
//         let skills = ['ntml', 'css', 'js'];
//         alert(`I can operate with ${skills}!`)
//     };
//     showSkills()

//     function checkAge() {
//         let i = age;
//         if (i>18) {
//             alert(`You are good, man!`);
//         } else {
//             alert(`Perfect, man!!!`)
//         }
//     };
//     checkAge(age)

//     function calcPow(num) {
//         consol.log(num*num);
//     }
//     calcPow(4)
    
// }

// myFirstApp("Igor", 33);


// const arr = ['a', 'b', 'c'];
// const arrObj = {
//     0: 'a',
//     1: 'b',
//     2: 'c'
// };

// arrObj[`b`] = 'd';

// console.log(arrObj[`b`]);

// const answer = +prompt('are you 18?', '18');
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('What is your name?', '');
// answers[1] = prompt('What is your surname?', '');
// answers[2] = prompt('What is your age?', '');

// // document.write(answers);
// console.log(typeof(answers));

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const user = "Igor";

// alert(`Hey, ${user}`);

let incr = 10,
    decr = 10;

// incr++; 
// decr--;

console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(2 + 2 * 2 === 8);


const isChecked = true,
    isClose = false;

// console.log(isChecked || isClose); - or
// console.log(isChecked && isClose); - and

