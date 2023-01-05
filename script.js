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

// let incr = 10,
//     decr = 10;

// incr++; 
// decr--;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2 + 2 * 2 === 8);


// const isChecked = true,
//     isClose = false;

// console.log(isChecked || isClose); - or
// console.log(isChecked && isClose); - and

// const numberOfFilms = +prompt(`How many films have you seen?`, ``);
// const personaMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genders: [],
//     private: false,
// };

// const a = prompt(`What is one of last films, which you have seen`, ``),
//         b = prompt(`What is your mark for this film?`, ``),
//         c = prompt(`What is one of last films, which you have seen`, ``),
//         d = prompt(`What is your mark for this film?`, ``);

// personaMovieDB.movies[a] = b;
// personaMovieDB.movies[c] = d;

// console.log(personaMovieDB);

// let num = 50;
// if (num <49) {
//     console.log('Error!');
// } else if (num>100) {
//     console.log('Error again');
// } else {
//     console.log('Ok!');
// }


// let num = 50;
// (num === 50) ? console.log('Ok!') : console.log('Error');

// switch (num) {
//     case 49:
//         console.log('Wrong');
//         break;
//     case 100:
//         console.log('Wrong');
//         break;
//     case 50:
//         console.log('Yes');
//         break;
//     default:
//         console.log('Wrong again');
//         break;
// }

// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log('I`m full!');
// }

// console.log((hamburger && fries));

// const hamburger = 2;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// if (hamburger === 3 && cola ===1 && fries) {
//     console.log('I`m full!');
// } else {
//     console.log('Go home!');
// }

// console.log((hamburger && fries));

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 0);
// console.log(0 && 'sdfjkldsfladjvckajoik');

// const hamburger = 2;
// const fries = 3;
// const cola = 2;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('we will stay!');
// } else {
//     console.log('Go home!');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;

// }
// while (num<55);

// for (let i = 1; i<8; i++) {
//     console.log(i);
// }

// let num = 50;
// for (let i = 1; i<8; i++) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i<8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }


// for (let i = 1; i<3; i++) {
//     console.log(i);
//     for (let j = 0; j<3; j++) {
//         console.log(j);
//     }
// }

// let result = '';
// const leng = 7;

// for (let i =1; i<leng; i++) {
//     for (let j = 0; j<i; j++) {
//         result += "*";
//     }
//     result += '\n';
// }
// console.log(result);

// *
// **
// ***
// ****
// *****
// ******


let result = '';
const leng = 7;

for (let i =1; i<leng; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j<i; j++) {
        console.log(`Second level: ${j}`);
        result += "*";
        for (let k = 0; k<i; k++) {
            console.log(`Third level: ${k}`);
            result += "*";
        }
    }
    result += '\n';
}
console.log(result);