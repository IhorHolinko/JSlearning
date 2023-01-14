"use strict";

// let numberOfFilms;
// function start() {
//     numberOfFilms = +prompt(`How many films have you seen?`, ``).trim();

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt(`How many films have you seen?`, ``).trim();
//     }
// }

// start();

const personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genders: [],
    private: false,
    start: function() { //or =>
        personaMovieDB.count = +prompt(`How many films have you seen?`, ``).trim();
    
        while (personaMovieDB.count == '' || personaMovieDB.count == null || isNaN(personaMovieDB.count)) {
            personaMovieDB.count = +prompt(`How many films have you seen?`, ``).trim();
        }
    },
    rememberMyFilms: function() { //or =>
        for (let i = 0; i < 2; i++) {
            const a = prompt(`What is one of last films, which you have seen`, ``).trim(),
                    b = prompt(`What is your mark for this film?`, ``).trim();
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personaMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() { //or =>
        if (personaMovieDB.count < 10) {
            console.log('You have seen too little films!');
        } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
            console.log('Wonderful! Too many films!');
        } else if (personaMovieDB.count >= 30) {
            console.log('You are kinoman');
        } else {
            console.log('Mistake');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personaMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personaMovieDB.private) {
            personaMovieDB.private = false;
        } else {
            personaMovieDB.private = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favourite genre under number ${i}`);

            if (genre === '' || genre !== null) {
                console.log('Your data is incorrect');
                i--;
            } else {
            personaMovieDB.genders[i - 1] = genre;
            }
        }
        personaMovieDB.genders.forEach((item, i) => {
            console.log(`Favourite genre number ${i + 1} is ${item}`);
        });      
        // for (let i = 1; i < 2; i++) {
        //     let genres = prompt('Insert your favourite genres throw the koma').toLowerCase();
        //     if (genres === '' || genres == null) {
        //         console.log('Your data or sintacsys is incorrect');
        //     } else {
        //         personaMovieDB.genders[i-1] = genres.split(', ');
        //         personaMovieDB.genres.sort();
        //     }
        // }
    },
};

// const a = prompt(`What is one of last films, which you have seen`, ``),
//         b = prompt(`What is your mark for this film?`, ``),
//         c = prompt(`What is one of last films, which you have seen`, ``),
//         d = prompt(`What is your mark for this film?`, ``);

// personaMovieDB.movies[a] = b;
// personaMovieDB.movies[c] = d;

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt(`What is one of last films, which you have seen`, ``).trim(),
//                 b = prompt(`What is your mark for this film?`, ``).trim();
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personaMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();


// function detectPersonalLevel() {
//     if (personaMovieDB.count < 10) {
//         console.log('You have seen too little films!');
//     } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
//         console.log('Wonderful! Too many films!');
//     } else if (personaMovieDB.count >= 30) {
//         console.log('You are kinoman');
//     } else {
//         console.log('Mistake');
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personaMovieDB);
//     }
// }

// showMyDB(personaMovieDB.private);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personaMovieDB.genders[i - 1] = prompt(`Your favourite genre under number ${i}`);
//     }
// }

// writeYourGenres();


console.log(personaMovieDB);

window.addEventListener('DOMContentLoaded', () => {

    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.touches);
        console.log(e.targerTouches);
        console.log(e.changedTouches);

    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });

});
